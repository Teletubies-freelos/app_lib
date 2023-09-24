import { lazy } from 'react'
import { createHashRouter } from 'react-router-dom'

const LazyHome = lazy(()=> import('../pages/home'))
const LazyProducts = lazy(()=> import('../pages/products'))

export const routes = createHashRouter([
  {
    path: '/home',
    element: <LazyHome />
  },
  {
    path: '/products'
  },
  {
    path: '/',
    element: <LazyProducts />
  }
])
