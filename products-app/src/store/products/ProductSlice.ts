import { getProductsListAPI } from '@/lib/restAPI/ProductsAPI';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppThunk } from '../store';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export const fetchProducts = (): AppThunk => async (dispatch) => {
  console.log('fetchedData');
  try {
    dispatch(setLoading(true));
    const response = await axios.get(getProductsListAPI());
    localStorage.setItem('products', JSON.stringify(response.data));
    dispatch(setProducts(response.data));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setError('Failed to fetch products'));
    dispatch(setLoading(false));
  }
};

export default productsSlice.reducer;
