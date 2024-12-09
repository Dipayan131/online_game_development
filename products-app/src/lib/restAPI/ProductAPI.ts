import { PAGE_LIMIT } from '@/lib/constants';

import { makeAPIRequest } from '.';

interface GetProductAPIProps {
  id?: number;
}

export function getProducttAPI({ id }: GetProductAPIProps) {
  const apiPath = `products/${id}`;

  return makeAPIRequest<any>('GET', apiPath);
}
