import DetailOrderState from "../../../../../packages/ui/src/molecules/DetailOrderState";
import {
  SearchBar,
  NavBar,
  CartIcon,
  Typography,
  Stack,
  Box,
  MainLogo,
  StepStatus,
  LabelStepStatus,
} from "../../../../../packages/ui/src";

export default function OrderState() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ height: "70rem" }}
    >
      <NavBar cartComponent={<CartIcon />} onSearch={console.log} />
      <Typography variant="h2" sx={{ margin: " 0 auto", border: "none" }}>
        Estado de pedido
      </Typography>
      <StepStatus />
      <DetailOrderState />
      <Box display="flex" justifyContent="center" sx={{ width: "100%" }}>
        <MainLogo />
      </Box>
    </Stack>
  );
}
