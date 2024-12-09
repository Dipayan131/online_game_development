//@ts-nocheck
import Loader from '@/components/base/Loader';
import { useProduct } from '@/hooks/useProduct';
import ProductView from '@/views/ProductView';
import { useHistory, useNavigate } from 'react-router-dom';

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
const ProductContainer = ({ id }) => {
  const navigate = useNavigate();
  const [product] = useProduct(id);

  const handleBack = () => {
    navigate('/');
  };

  const handleNext = () => {
    navigate('/' + (id + 1));
  };

  const handlePrev = () => {
    id && navigate('/' + (id - 1));
  };

  if (!product) {
    return <Loader />;
  }

  return <ProductView product={product} handlePrev={handlePrev} handleBack={handleBack} handleNext={handleNext} />;
};

export default ProductContainer;
