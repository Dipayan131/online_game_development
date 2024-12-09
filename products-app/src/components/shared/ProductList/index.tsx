//@ts-nocheck
import Loader from '@/components/base/Loader';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
  handleNavigate: () => void;
}

const LazyProductCard = lazy(() => import('@/components/custom/ProductCard'));

const ProductList: React.FC<ProductListProps> = ({ products, handleNavigate }) => {
  const [productItems, setProductItems] = useState<Product[]>(products);
  const [prevProductItems, setPrevProductItems] = useState<Product[]>(products);

  console.log('products----', products);
  useEffect(() => {
    setProductItems((prev) => []);
    setProductItems((prev) => products);
  }, [products]);

  useEffect(() => {
    if (JSON.stringify(productItems) !== JSON.stringify(prevProductItems)) {
      localStorage.setItem('products', JSON.stringify(productItems));
      setPrevProductItems(productItems);
    }
  }, [productItems, prevProductItems]);

  const moveProduct = (dragIndex: number, hoverIndex: number) => {
    const draggedProduct = productItems[dragIndex];
    setProductItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(dragIndex, 1);
      updatedItems.splice(hoverIndex, 0, draggedProduct);
      return updatedItems;
    });
  };

  const ProductItem: React.FC<{ product: Product }> = ({ product, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'list-item',
      item: { id: product.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: 'list-item',
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveProduct(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
      <div ref={(node) => drag(drop(node))}>
        <Suspense key={index + 1} fallback={<Loader type="circle" loading={true} />}>
          <LazyProductCard key={product.id} product={product} handleNavigate={handleNavigate} />
        </Suspense>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productItems.map((product, index) => (
          <ProductItem key={product.id} product={product} index={index} />
        ))}
      </div>
    </DndProvider>
  );
};

export default ProductList;
