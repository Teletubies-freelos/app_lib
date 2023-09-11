import { Box, Stack, Typography } from "@mui/material";

import { LabelStepStatus } from "../../../../../../packages/ui/src";
import totalMoney from "../common/total.svg";
import CustomAcordion from "../common/CustomAcordion";

export default function BodyPickup({ total }: { total: string }) {
  return (
    <Stack>
      <CustomAcordion
        header={
          <Stack>
            <Typography sx={({ palette }) => ({ color: palette.text.primary })}>
              Tu Pedido
            </Typography>
            <Typography sx={({ palette }) => ({ color: palette.secondary })}>
              3 productos
            </Typography>
          </Stack>
        }
        content={
          <>
            {Array.from(Array(3).keys()).map((_, index) => (
              <Box
                display="flex"
                justifyContent="space-between"
                padding=".5rem 0"
                key={index}
              >
                <Typography>Producto 1</Typography>
                <Typography>S/ 12,00</Typography>
              </Box>
            ))}
          </>
        }
      />
      <LabelStepStatus
        property="Total"
        value={total}
        icon={<img src={totalMoney} alt="money" />}
        sx={{
          fontSize: "1rem !important",
          marginTop: "1.5rem",
        }}
      />
    </Stack>
  );
}
