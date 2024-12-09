import { PAGE_LIMIT } from '@/lib/constants';

import { API_BASE_URL } from '../config';

export function getProductsListAPI() {
  const apiPath = `${API_BASE_URL}/products?limit=${PAGE_LIMIT}`;

  return apiPath;
}
