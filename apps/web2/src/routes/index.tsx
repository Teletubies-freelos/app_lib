import { lazy } from "react";
import { createBrowserRouter, createHashRouter } from "react-router-dom";

const LazyHome = lazy(() => import("../pages/Home"));
const LazyOrderStatus = lazy(() => import("../pages/estado-pedido"));

const createRouter = import.meta.env.VITE_IS_BROWSER_ROUTER
  ? createBrowserRouter
  : createHashRouter;

export const router = createRouter([
  {
    path: "/",
    element: <LazyHome />,
  },
  {
    path: "estado-pedido",
    element: <LazyOrderStatus />,
  },
]);
