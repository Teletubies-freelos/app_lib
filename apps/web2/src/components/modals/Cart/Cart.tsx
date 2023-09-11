import { Modal, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ModalLayout } from "../../../../../../packages/ui/src";
import HeadModal from "../common/HeadModal";

interface CartProps {
  content?: JSX.Element;
  openCartFloat: boolean;
  onClose?: () => void;
}

export default function Cart({ content, openCartFloat, onClose }: CartProps) {
  return (
    <Modal
      onClose={onClose}
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
