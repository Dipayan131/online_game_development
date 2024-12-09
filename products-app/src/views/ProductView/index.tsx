import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface ProductViewProps {
  product: Product;
  handlePrev: () => void;
  handleBack: () => void;
  handleNext: () => void;
}

const ProductView: React.FC<ProductViewProps> = ({ product, handleBack, handleNext, handlePrev }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b-2 border-gray-200 mb-8 pb-4">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="text-gray-600">${product.price}</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-700">Category: {product.category}</p>
          <p className="text-gray-700">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
