import { OrdersResponse } from '../services/orders';

interface ProductSerialize {
  id: number | string;
  imageUrl: string;
  name: string;
  price: number | string;
  priceDiscount: number;
  productId: string;
  quantity: number;
}

const deserializeProducts = (data: OrdersResponse[]) => {
  return data?.map((order) => {
    const productsArray: ProductSerialize[] = JSON.parse(order.products);

    return {
      ...order,
      products: productsArray?.map((product) => {
        return `${product.name}   x   ${product.quantity}\n`;
      }),
    };
  });
};

const deserializeStatePayment = (order: OrdersResponse) => {
  return order.payment_state ? 'Pagado' : 'Pendiente';
};

export const finalProducts = (data: OrdersResponse[]) => {
  return data?.map((order: OrdersResponse) => {
    return {
      ...order,
      products: deserializeProducts([order])[0].products,
      payment_state: deserializeStatePayment(order),
    };
  });
};
