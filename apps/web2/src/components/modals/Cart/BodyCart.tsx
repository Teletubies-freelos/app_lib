import { Box, Stack, Typography } from "@mui/material";
import {
  Button,
  CardStateOrder,
  LabelStepStatus,
  Quantity,
} from "../../../../../../packages/ui/src";
import totalMoney from "../common/total.svg";

interface BodyCartProps {
  total: string;
}

const image = (
  <Box display="flex" height={"4.75rem"} alignItems={"center"}>
    <img
      src={"https://m.media-amazon.com/images/I/815aKWcEkEL.jpg"}
      srcSet={`https://m.media-amazon.com/images/I/815aKWcEkEL.jpg`}
      alt={"image"}
      style={{
        height: "80%",
        width: "100%",
        objectFit: "contain",
      }}
      loading="lazy"
    />
  </Box>
);

export default function BodyCart({ total }: BodyCartProps) {
  return (
    <>
      <Box display="flex" flexDirection="column" gap="1rem">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardStateOrder
            key={index}
            img={image}
            title="Spidermaan Marvel PS4"
            price="S/ 120.00"
            quantity={
              <Quantity
                quantity={10}
                changeQuantity={() => 4}
                onDelete={() => 5}
              />
            }
          />
        ))}
      </Box>
      <LabelStepStatus
        property="Total"
        value={total}
        icon={<img src={totalMoney} alt="money" />}
        sx={{
          fontSize: "1rem !important",
          marginTop: "1.5rem",
        }}
      />
      <Stack>
        <Typography
          textAlign="center"
          variant="body2"
          fontSize="1rem"
          padding="1rem 0 .5rem 0"
        >
          Selecciona el tipo de entrega
        </Typography>
        <Box display="flex" gap=".5rem">
          <Button
            fullWidth
            label="Recojo en tienda"
            variant="outlined"
            sx={{ height: "2.8rem" }}
          />
          <Button
            fullWidth
            label="Entrega a domicilio"
            variant="contained"
            sx={{ height: "2.8rem" }}
          />
        </Box>
      </Stack>
    </>
  );
}
