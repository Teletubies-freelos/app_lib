import { Box, Stack, Typography } from "@mui/material";
import {
  SearchBar,
  NavBar,
  CartIcon,
  MainLogo,
  Button,
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
        searchBar={<Button label="Buscar" variant="contained" />}
        mainLogo={<MainLogo />}
      />
      <Box sx={{ width: { xs: "100%", sm: "25rem" }, margin: "auto" }}>
        <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
          Ingresa tu número de pedido
        </Typography>
        <SearchBar
          placeHolder="ABC123"
          buttonSearch={<Button label="buscar" variant="contained" />}
          onSubmit={() => console.log("click")}
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
