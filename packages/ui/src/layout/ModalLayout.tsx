import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

interface ModalLayoutProps {
  headerModal: JSX.Element;
  height?: string;
}

const ModalLayout = ({
  headerModal,
  children,
  height,
}: PropsWithChildren<ModalLayoutProps>) => {
  return (
    <Stack
      width="100%"
      maxWidth="44.7rem"
      height={height}
      sx={{
        borderRadius: "0.3rem",
      }}
    >
      {headerModal}
      <Box
        height="100%"
        sx={(theme) => ({
          background: theme.palette.background.paper,
          padding: "1rem",
          borderRadius: "0 0 0.3rem 0.3rem",
        })}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default ModalLayout;
