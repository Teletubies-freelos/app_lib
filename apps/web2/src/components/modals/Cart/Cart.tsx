import { Box, Modal, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../../../hooks/useCart";
import { ModalLayout, Quantity } from "../../../../../../packages/ui/src";
import HeadModal from "../common/HeadModal";

interface CartProps {
  content?: JSX.Element;
  openCartFloat: boolean;
  changeFloatCart: () => void;
}

export default function Cart({
  content,
  openCartFloat,
  changeFloatCart,
}: CartProps) {
  return (
    <Modal
      open={openCartFloat}
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
