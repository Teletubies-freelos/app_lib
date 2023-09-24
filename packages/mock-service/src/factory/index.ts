import { factory } from '@mswjs/data';
import { productsFactory } from './products';
import { ordersFactory } from './orders';
import { FactoryAPI } from '@mswjs/data/lib/glossary';

export const db = factory(
  {
    products: productsFactory(true),
    orders: ordersFactory(true),
  },
)
