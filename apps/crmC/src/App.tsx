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
} from "@refinedev/react-router-v6";

import LoadingPage from '../../../packages/ui/src/molecules/Loadingpage'

import { useCustomAuth } from "./hooks/useCustomAuth";
import { graphqlClient } from "./modules";
import { Home } from "./pages/home";
import { DashBoard } from "./pages/dashboard";
import dataProvider from "@refinedev/hasura";


function App() {
  const { authProvider, isLoading } = useCustomAuth();

  if (isLoading)
    return <LoadingPage />

  return (
    <HashRouter>
      <RefineKbarProvider>
        <RefineSnackbarProvider>
          <Refine
            dataProvider={dataProvider(graphqlClient)}
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            authProvider={authProvider}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "3trMjA-es7q8t-PTD8PO",
            }}
          >
            <Routes>
              <Route index element={
                <DashBoard />
              }
              />
              <Route path='/home' element={<Home />} />
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
