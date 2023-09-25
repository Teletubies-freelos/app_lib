import { lazy } from 'react';
import { Navigate, createHashRouter } from 'react-router-dom';

const LazyHome = lazy(() => import('../pages/home'));
const LazyProducts = lazy(() => import('../pages/products'));
const LazyCategories = lazy(() => import('../pages/categories'));

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
    path: '/products',
    element: <LazyProducts />,
  },
  {
    path: '/categories',
    element: <LazyCategories />,
  },
]);
