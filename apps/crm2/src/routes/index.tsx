import { lazy } from 'react';
import { Navigate, createHashRouter } from 'react-router-dom';
import { Product } from '../components/product';

const LazyHome = lazy(() => import('../pages/home'));
const LazyCategories = lazy(() => import('../pages/categories'));
const LazyOrders = lazy(() => import('../pages/orders'));

export const routes = createHashRouter([
  {
    path: '/home',
    element: <LazyHome />,
  },
  {
    path: '/',
    element: <Navigate to='/products' />,
  },
  {
    path: '/teletubies',
    element: (
      <Product
        product_id={1}
        name='nuevo'
        price={20.99}
        description='esta es una descripcion'
        image_url='https://example.com'
        quantity={22}
      />
    ),
  },
  {
    path: '/orders',
    element: <LazyOrders />,
  },
  {
    path: '/categories',
    element: <LazyCategories />,
  },
]);
