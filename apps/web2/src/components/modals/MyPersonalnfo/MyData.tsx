import { IconButton, Modal, Typography } from "@mui/material";
import { ModalLayout } from "../../../../../../packages/ui/src";
import HeadModal from "../common/HeadModal";
import BodyMyData from "./BodyMyData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  setIsCartShop,
  setIsYourData,
  useIsYourDataOpen,
} from "../../../observables";

export default function MyData() {
  const isOpen = useIsYourDataOpen();
  const handleBack = () => {
    setIsYourData(false);
    setIsCartShop(true);
  };

  return (
    <Modal
      open={!!isOpen}
      onClose={() => setIsYourData(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalLayout
        headerModal={
          <HeadModal
            onClose={() => setIsYourData(false)}
            title={<Typography variant="h5">Tus datos</Typography>}
            icon={
              <IconButton onClick={handleBack}>
                <ArrowBackIosIcon />
              </IconButton>
            }
          />
        }
        height="700px"
      >
        <BodyMyData />
      </ModalLayout>
    </Modal>
  );
}
