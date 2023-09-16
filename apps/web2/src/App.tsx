import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";
import Providers from "./providers";
import { Suspense, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { cartClient } from "./modules";
import { setPriceTotalProducts, setTotalCountProducts } from "./observables";

if(import.meta.env.DEV && import.meta.env.VITE_MSW_ON){
  const { worker } = await import('../../../packages/mock-service/src/browser')
  
  worker.start()
}


function App() {

  const [isLoadingDB,setIsLoadingDB] = useState(true)

  useEffect(()=>{
    Promise.all([
      cartClient.getTotalProductsPrice().then(price=> setPriceTotalProducts(price)),
      cartClient.getTotalProductsQuantity().then(quantity=> setTotalCountProducts(quantity))
    ]).then(()=> setIsLoadingDB(false))

  },[])

  if(isLoadingDB) return (<CircularProgress />)

  return (
    <Providers>
      <Suspense fallback={<CircularProgress />}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  );
}

export default App;
