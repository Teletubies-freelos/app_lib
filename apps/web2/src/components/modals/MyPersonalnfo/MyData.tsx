import { Modal, Typography } from "@mui/material";
import { ModalLayout } from "../../../../../../packages/ui/src";
import HeadModal from "../common/HeadModal";
import BodyMyData from "./BodyMyData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface MyDataProps {
  openCartFloat: boolean;
  changeFloatCart: () => void;
}

export default function MyData({
  openCartFloat,
  changeFloatCart,
}: MyDataProps) {
  return (
    <Modal
      open={openCartFloat}
      onClose={changeFloatCart}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalLayout
        headerModal={
          <HeadModal
            title={<Typography variant="h5">Tus datos</Typography>}
            icon={<ArrowBackIosIcon />}
          />
        }
        height="700px"
      >
        <BodyMyData />
      </ModalLayout>
    </Modal>
  );
}
