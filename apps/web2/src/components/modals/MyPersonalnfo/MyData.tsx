import { Modal, Typography } from "@mui/material";
import { ModalLayout } from "../../../../../../packages/ui/src";
import { useCart } from "../../../hooks/useCart";
import HeadModal from "../common/HeadModal";
import BodyMyData from "./BodyMyData";
export default function () {
  const { openCartFloat, changeFloatCart } = useCart();

  return (
    <Modal
      open={openCartFloat}
      onClose={changeFloatCart}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalLayout
        headerModal={
          <HeadModal title={<Typography variant="h5">Tus datos</Typography>} />
        }
        height="700px"
      >
        <BodyMyData />
      </ModalLayout>
    </Modal>
  );
}
