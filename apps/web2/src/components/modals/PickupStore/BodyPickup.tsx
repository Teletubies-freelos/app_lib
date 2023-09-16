import { Box, Stack, Typography } from "@mui/material";

import { LabelStepStatus } from "../../../../../../packages/ui/src";
import totalMoney from "../common/total.svg";
import CustomAcordion from "../common/CustomAcordion";
import { useGetIndexedDb } from "../../../hooks/useGetIndexedDb";
import { useQuery } from "@tanstack/react-query";
import { cartClient } from "../../../modules";

export default function BodyPickup() {
  const {
    dataProducts: {data}, 
    dataPrice: {data: total}
  } = useGetIndexedDb()

  const {data: totalCount} = useQuery({
    queryKey: ['totalCount'],
    queryFn : ()=> cartClient.getTotalCount()
  })
  

  return (
    <Stack>
      <CustomAcordion
        header={
          <Stack>
            <Typography sx={({ palette }) => ({ color: palette.text.primary })}>
              Tu Pedido
            </Typography>
            <Typography
              sx={({ palette }) => ({ color: palette.text.secondary })}
            >
              {totalCount}
            </Typography>
          </Stack>
        }
        content={
          <>
            {data?.map(({name, price, id}) => (
              <Box
                display="flex"
                justifyContent="space-between"
                padding=".5rem 0"
                key={id}
              >
                <Typography>{name}</Typography>
                <Typography>S/ {price}</Typography>
              </Box>
            ))}
          </>
        }
      />
      <LabelStepStatus
        property="Total"
        value={total?.toFixed(2)}
        icon={<img src={totalMoney} alt="money" />}
        sx={{
          fontSize: "1rem !important",
          marginTop: "1.5rem",
        }}
      />
    </Stack>
  );
}
