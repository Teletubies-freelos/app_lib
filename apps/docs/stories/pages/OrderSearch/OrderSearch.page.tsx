import { Box, Stack, Typography } from "@mui/material";
import {
  SearchBar,
  NavBar,
  CartIcon,
  MainLogo,
} from "../../../../../packages/ui/src";

export default function OrderSearch() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      sx={{ height: "40rem" }}
    >
      <NavBar
        cartComponent={<CartIcon />}
        onSearch={console.log}
        mainLogo={<MainLogo />}
      />
      <Box sx={{ width: { xs: "100%", sm: "25rem" }, margin: "auto" }}>
        <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
          Ingresa tu número de pedido
        </Typography>
        <SearchBar
          placeHolder="ABC123"
          searchButtonContent="Buscar"
          onSubmit={() => console.log("click")}
          btnVariant="contained"
          direction="column"
        />
      </Box>
      <Box
        justifyContent="center"
        sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
      >
        <MainLogo />
      </Box>
    </Stack>
  );
}
