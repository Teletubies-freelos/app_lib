import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";
import Providers from "./providers";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";


if(import.meta.env.DEV && import.meta.env.VITE_MSW_ON){
  const { worker } = await import('../../../packages/mock-service/src/browser')
  
  worker.start()
}

function App() {
  return (
    <Providers>
      <Suspense fallback={<CircularProgress />}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  );
}

export default App;
