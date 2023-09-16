import { Modal, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ModalLayout } from "../../../../../../packages/ui/src";
import HeadModal from "../common/HeadModal";
import { setIsCartShop, useIsCartShopOpen } from "../../../observables";

interface CartProps {
  content?: JSX.Element;
}

export default function Cart({ content }: CartProps) {

  const isOpen = useIsCartShopOpen()

  const handleClose = ()=> setIsCartShop(false)

  return (
    <Modal
      onClose={handleClose}
      open={isOpen}
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
