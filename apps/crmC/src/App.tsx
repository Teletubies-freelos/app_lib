import {
  Refine,
} from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  notificationProvider,
  RefineSnackbarProvider,
} from "@refinedev/mui";


import { BrowserRouter, Route, Routes, Outlet, HashRouter } from "react-router-dom";
import routerBindings, {
  UnsavedChangesNotifier,
  DocumentTitleHandler,
  NavigateToResource,
} from "@refinedev/react-router-v6";

import LoadingPage from '../../../packages/ui/src/molecules/Loadingpage'

import { useCustomAuth } from "./hooks/useCustomAuth";
import { graphqlClient } from "./modules";
import { Home } from "./pages/home";
import { DashBoard } from "./pages/dashboard";
import dataProvider from "@refinedev/hasura";
import { env } from "./config/env";
import { ProductsProvider } from "./services/products";
import { ProductsList } from "./components/productsList";

if(import.meta.env.DEV && env.IS_MSW_ON){
  const { worker } = await import('../../../packages/mock-service/src/browser')

  worker.start();
}

function App() {
  const { authProvider, isLoading } = useCustomAuth();

  if (isLoading)
    return <LoadingPage />

  return (
    <HashRouter>
      <RefineKbarProvider>
        <RefineSnackbarProvider>
          <Refine
            dataProvider={ProductsProvider(graphqlClient)}
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            authProvider={authProvider}
            resources={[{
              name: 'products',
              list: '/products'
            }]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "3trMjA-es7q8t-PTD8PO",
            }}
          >
            <Routes>
              <Route index element={
                <NavigateToResource resource='products'/>
              }
              />
              <Route path='/home' element={<Home />} />
              <Route path='/products' element={<ProductsList />}/>
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </RefineSnackbarProvider>
      </RefineKbarProvider>
    </HashRouter>
  );
}

export default App;
