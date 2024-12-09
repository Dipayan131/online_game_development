//@ts-nocheck
import Loader from '@/components/base/Loader';
import { fetchProducts, setProducts } from '@/store/products/ProductSlice';
import { RootState } from '@/store/store';
import ProductsListView from '@/views/ProductsListView';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductsListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  const handleFetch = async () => {
    let productsData = localStorage.getItem('products');
    console.log('productsData', productsData);
    if (productsData) {
      dispatch(setProducts(JSON.parse(productsData)));
    } else {
      await dispatch(fetchProducts());
    }
  };

  console.log('products', products);

  const handleNavigate = (id: number) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (loading) {
    return <Loader type="propogate" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ProductsListView products={products} handleNavigate={handleNavigate} />;
};

export default ProductsListContainer;
