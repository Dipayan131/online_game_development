import ProductList from '@/components/shared/ProductList';
import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductsListViewProps {
  products: Product[];
  handleNavigate: () => void;
}

const ProductsListView: React.FC<ProductsListViewProps> = ({ products, handleNavigate }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Products</h1>
      <ProductList products={products} handleNavigate={handleNavigate} />
    </div>
  );
};

export default ProductsListView;
