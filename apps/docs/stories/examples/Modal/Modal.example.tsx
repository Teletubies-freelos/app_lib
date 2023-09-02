import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { HeaderModal, Quantity } from "../../../../../packages/ui/src";
import ModalLayout from "../../../../../packages/ui/src/layout/ModalLayout";
import CardStateOrder from "../../../../../packages/ui/src/molecules/CardStateOrder";

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

export default function Modal() {
  return (
    <ModalLayout
      height="500px"
      headerModal={
        <HeaderModal
          iconLeft={<ShoppingCartIcon />}
          iconRight={<CloseIcon />}
          textHeader="Carrito"
        />
      }
    >
      <Box display="flex" flexDirection="column" gap="1rem">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardStateOrder
            key={index}
            img={image}
            title="Spidermaan Marvel PS4"
            price="S/ 120.00"
            quantity={<Quantity />}
          />
        ))}
      </Box>
    </ModalLayout>
  );
}
