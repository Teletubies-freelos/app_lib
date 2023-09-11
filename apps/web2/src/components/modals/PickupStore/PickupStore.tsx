import { Modal, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ModalLayout } from "../../../../../../packages/ui/src";
import { useCart } from "../../../hooks/useCart";
import HeadModal from "../common/HeadModal";
import FooterModal from "../common/FooterModal";

export default function PickupStore({ content }: { content: JSX.Element }) {
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
            title={<Typography variant="h5">Recojo en Tienda</Typography>}
            icon={<ArrowBackIosIcon />}
          />
        }
      >
        {content}
        <FooterModal
          nameButton="Confirmar pedido"
          infoMessage="No existe costo de envío por ser recojo en tienda."
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            marginTop: "2rem",
          }}
        />
      </ModalLayout>
    </Modal>
  );
}
