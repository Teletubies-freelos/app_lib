import { Modal, Typography } from "@mui/material";

import { useCart } from "../../../hooks/useCart";
import { ModalLayout } from "../../../../../../packages/ui/src";
import HeadModal from "../common/HeadModal";
import BodyPayments from "./BodyPayments";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Payments() {
  const { openCartFloat, changeFloatCart } = useCart();

  return (
    <Modal
      open={openCartFloat}
      onClose={changeFloatCart}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalLayout
        headerModal={
          <HeadModal
            title={<Typography variant="h5">Medio de Pago</Typography>}
            icon={<ArrowBackIosIcon />}
          />
        }
      >
        <BodyPayments />
      </ModalLayout>
    </Modal>
  );
}
