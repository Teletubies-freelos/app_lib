import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";
import Providers from "./providers";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

function App() {
  return (
    <>
      <Providers>
        <Suspense fallback={<CircularProgress />}>
          <RouterProvider router={router} />
        </Suspense>
      </Providers>
    </>
  );
}

export default App;
