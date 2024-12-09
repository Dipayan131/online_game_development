import { getProducttAPI } from '@/lib/restAPI/ProductAPI';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useProduct = (id: number) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setIsLoading(false);
      }
    };

    fetchProduct();

    return () => {};
  }, [id]);

  return [product, isLoading];
  //   return useQuery(['product', id], () => getProducttAPI({ id }), {
  //     retry: 3,
  //   });
};
