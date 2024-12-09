import productsReducer from '@/store/products/ProductSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
