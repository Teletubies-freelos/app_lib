import { Box, Stack } from "@mui/material";

interface ModalLayoutProps {
  headerModal: JSX.Element;
  children: JSX.Element;
  height: string;
}

const ModalLayout = ({ headerModal, children, height }: ModalLayoutProps) => {
  return (
    <Stack
      width="100%"
      maxWidth="44.7rem"
      height={height}
      sx={{
        boxShadow:
          "0px 32px 32px 0px rgba(0, 0, 0, 0.08), 0px 11.699999809265137px 11.699999809265137px 0px rgba(0, 0, 0, 0.05), 0px 5.699999809265137px 5.699999809265137px 0px rgba(0, 0, 0, 0.05), 0px 2.799999952316284px 2.799999952316284px 0px rgba(0, 0, 0, 0.04), 0px 1.100000023841858px 1.100000023841858px 0px rgba(0, 0, 0, 0.03), 0px -1px 2px 0px rgba(0, 0, 0, 0.04)",
        borderRadius: "0.25rem",
      }}
    >
      {headerModal}
      <Box height="100%" sx={{ background: "#E3E9FF", padding: "1rem" }}>
        {children}
      </Box>
    </Stack>
  );
};

export default ModalLayout;
