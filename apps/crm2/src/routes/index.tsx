import { createHashRouter } from 'react-router-dom'
import { Authenticated } from '../components/authenticated'
import ListProducts from '../pages/products/list'

export const routes = createHashRouter([
  {
    path: '/home'
  },
  {
    path: '/products'
  },
  {
    path: '/',
    element: (
      <Authenticated>
        <ListProducts />
      </Authenticated>
    )
  }
])
