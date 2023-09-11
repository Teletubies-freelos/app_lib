import { Modal, Typography } from "@mui/material";
import { ModalLayout } from "../../../../../../packages/ui/src";
import HeadModal from "../common/HeadModal";
import BodyPayments from "./BodyPayments";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface PaymentsProps {
  openCartFloat: boolean;
  changeFloatCart: () => void;
}

export default function Payments({
  openCartFloat,
  changeFloatCart,
}: PaymentsProps) {
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
