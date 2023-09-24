import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

import LoadingPage from '../../../packages/ui/src/molecules/Loadingpage'
import { Providers } from './components/providers'

function App() {

  return (
    <Providers>
      <RouterProvider 
        router={routes}
        fallbackElement={<LoadingPage />}
      />
    </Providers>
  )
}

export default App
