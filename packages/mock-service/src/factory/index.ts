import { factory } from '@mswjs/data';
import { productsFactory } from './products';
import { ordersFactory } from './orders';

export const db = factory(
  {
    products: productsFactory(true),
    orders: ordersFactory(true),
  },
)
