import { lazy } from "react";
import { createHashRouter } from "react-router-dom";

const LazyHome = lazy(() => import("../pages/Home"));
const LazyOrderStatus = lazy(() => import("../pages/estado-pedido"));

export const router = createHashRouter([
  {
    path: "/",
    element: <LazyHome />,
  },
  {
    path: "estado-pedido",
    element: <LazyOrderStatus />,
  },
]);
