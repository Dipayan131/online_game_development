//@ts-nocheck
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import ProductView from '@/views/ProductView';
import ProductContainer from '@/containers/ProductContainer';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <ProductContainer id={id} />;
};

export default ProductPage;
