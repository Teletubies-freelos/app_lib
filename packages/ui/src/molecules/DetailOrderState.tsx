import { Button } from "@mui/material";
import { Box, LabelStepStatus, Stack } from "..";
import CardStateOrder from "./CardStateOrder";

export default function DetailOrderState() {
  return (
    <Stack sx={{ width: "100%", maxWidth: "40rem" }}>
      <Box>
        <LabelStepStatus property="Número de pedido" value="XAC431981" />
        <LabelStepStatus
          property="Fecha de entrega estimada"
          value="9 agosto"
        />
        <LabelStepStatus property="Productos" sx={{ marginTop: "2.25rem" }} />
      </Box>
      <Box>
        {Array.from({ length: 3 }).map((_, index) => (
          <CardStateOrder key={index} />
        ))}
      </Box>
      <Box sx={{ marginTop: "2.25rem" }}>
        <LabelStepStatus
          property="COSTO DELIVERY"
          value="S/ 20.00"
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "bold !important",
            fontSize: "1.1rem !important",
          }}
        />
        <LabelStepStatus
          property="TOTAL"
          value="S/ 480.00"
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "bold !important",
            fontSize: "1.1rem !important",
          }}
        />
      </Box>
      <Box sx={{ marginTop: "2.25rem" }}>
        <Button variant={"contained"} fullWidth>
          Whatsapp
        </Button>
      </Box>
    </Stack>
  );
}
