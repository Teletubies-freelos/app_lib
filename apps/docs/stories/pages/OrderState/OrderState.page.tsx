import DetailOrderState from "../../../../../packages/ui/src/molecules/DetailOrderState";
import { Box, Stack, Typography } from "@mui/material";
import {
  NavBar,
  CartIcon,
  MainLogo,
  StepStatus,
} from "../../../../../packages/ui/src";

export default function OrderState() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ height: "70rem" }}
    >
      <NavBar
        cartComponent={<CartIcon />}
        onSearch={() => 3}
        mainLogo={<MainLogo />}
      />
      <Typography variant="h2" sx={{ margin: " 0 auto", border: "none" }}>
        Estado de pedido
      </Typography>
      <StepStatus steps={["En tienda", "En camino", "Entregado"]} />
      <DetailOrderState />
      <Box
        display={{ xs: "none", sm: "flex" }}
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <MainLogo />
      </Box>
    </Stack>
  );
}
