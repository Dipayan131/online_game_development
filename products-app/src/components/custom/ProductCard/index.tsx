import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  handleNavigate: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleNavigate }) => {
  return (
    <div className="border p-4 rounded shadow" onClick={() => handleNavigate(product.id)}>
      <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500">{product.price}</p>
      <p className="text-sm mt-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;
