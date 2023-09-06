import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { WhatsappLogo } from "../../../packages/ui/src";

interface GeneralLayoutProps {
  navbar: JSX.Element;
}

// component props with children

export function GeneralLayout({
  navbar,
  children,
}: PropsWithChildren<GeneralLayoutProps>) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        padding: "1rem 0",
        height: "100vh",
      }}
    >
      {navbar}
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
        <WhatsappLogo />
      </Box>
    </Box>
  );
}
