import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";
import { WhatsappLogo } from "../../../../packages/ui/src";
import CartFloat from "../components/CartFloat";

interface GeneralLayoutProps {
  isShowSearch?: boolean;
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
          position: "sticky",
          bottom: "1.5rem",
          paddingRight: "1rem",
        }}
      >
        <WhatsappLogo sx={{ cursor: "pointer" }} />
      </Box>
      <CartFloat />
    </Box>
  );
}
