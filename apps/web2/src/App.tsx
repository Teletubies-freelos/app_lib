import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";
import Providers from "./providers";
import { Suspense } from "react";
import { LoadingPage } from '../../../packages/ui/src'


if(import.meta.env.DEV && import.meta.env.VITE_MSW_ON){
  const { worker } = await import('../../../packages/mock-service/src/browser')
  
  worker.start()
}

function App() {
  return (
    <Providers>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  );
}

export default App;
