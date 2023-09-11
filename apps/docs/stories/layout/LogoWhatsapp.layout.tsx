import { Box, Stack } from "@mui/material";
import { Button, CartIcon, NavBar } from "../../../../packages/ui/src";
import WhatsappLogo from "../../../../packages/ui/src/atoms/WhatsappLogo";

export default function LogoWhatsapp() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      sx={{ height: "40rem" }}
    >
      <NavBar
        cartComponent={<CartIcon />}
        searchBar={<Button label="Buscar" variant="contained" />}
      />
      <Box display="flex" justifyContent="end" sx={{ width: "100%" }}>
        <WhatsappLogo />
      </Box>
    </Stack>
  );
}
