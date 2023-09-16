import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";
import {

  WhatsappLogo,
} from "../../../../packages/ui/src";

import CartFloat from "../components/CartFloat";
import Cart from "../components/modals/Cart/Cart";
import BodyCart from "../components/modals/Cart/BodyCart";

interface GeneralLayoutProps {
  navBar: JSX.Element;
}

export function GeneralLayout({
  children,
  navBar,
}: PropsWithChildren<GeneralLayoutProps>) {

  return (
    <Box
      sx={{
        padding: "1rem 0",
        height: "100vh",
      }}
    >
      {navBar}
      {children}
      <Box
        display="flex"
        justifyContent="end"
        sx={{
          width: "100%",
          position: "fixed",
          bottom: "1.5rem",
          paddingRight: "1rem",
        }}
      >
        <WhatsappLogo sx={{ cursor: "pointer" }} />
      </Box>
        <Cart content={<BodyCart />}/>
        <CartFloat  />
    </Box>
  );
}
