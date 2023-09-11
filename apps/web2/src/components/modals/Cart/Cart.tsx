import { Box, Modal, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../../../hooks/useCart";
import { ModalLayout, Quantity } from "../../../../../../packages/ui/src";
import HeadModal from "../common/HeadModal";

interface CartProps {
  content?: JSX.Element;
}

export default function Cart({ content }: CartProps) {
  const { openCartFloat, changeFloatCart } = useCart();

  return (
    <Modal
      open={openCartFloat}
      onClose={changeFloatCart}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalLayout
        sx={{ maxWidth: "40rem" }}
        headerModal={
          <HeadModal
            title={<Typography variant="h5">Carrito</Typography>}
            icon={<ShoppingCartOutlinedIcon />}
          />
        }
      >
        {content}
      </ModalLayout>
    </Modal>
  );
}
