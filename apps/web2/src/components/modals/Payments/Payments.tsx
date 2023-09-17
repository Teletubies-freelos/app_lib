import { IconButton, Modal, Typography } from '@mui/material';
import { ModalLayout } from '../../../../../../packages/ui/src';
import HeadModal from '../common/HeadModal';
import BodyPayments from './BodyPayments';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  setIsPaymentData,
  setIsYourData,
  useIsPaymentDataOpen,
} from '../../../observables';

export default function Payments() {
  const isOpen = useIsPaymentDataOpen();

  const handleBack = () => {
    setIsPaymentData(false);
    setIsYourData(true);
  };

  return (
    <Modal
      open={!!isOpen}
      onClose={() => setIsPaymentData(false)}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ModalLayout
        headerModal={
          <HeadModal
            onClose={() => setIsPaymentData(false)}
            title={<Typography variant='h5'>Medio de Pago</Typography>}
            icon={
              <IconButton onClick={handleBack}>
                <ArrowBackIosIcon />
              </IconButton>
            }
          />
        }
      >
        <BodyPayments />
      </ModalLayout>
    </Modal>
  );
}
