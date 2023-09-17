import { CircularProgress, IconButton, Modal, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ModalLayout } from '../../../../../../packages/ui/src';
import HeadModal from '../common/HeadModal';
import FooterModal from '../common/FooterModal';
import {
  setIsCartShop,
  setIsConfirmedStore,
  setIsPickupStore,
  setPurchaseCode,
  useIsPickupStoreOpen,
} from '../../../observables';
import { purchase } from '../../../modules';
import { useMutation } from '@tanstack/react-query';

interface PickupStoreProps {
  content?: JSX.Element;
}

export default function PickupStore({ content }: PickupStoreProps) {
  const isOpen = useIsPickupStoreOpen();

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['purchase'],
    mutationFn: ()=> purchase.savePurchase(),
    cacheTime: 0,
  })

  const handleBack = () => {
    setIsCartShop(true);
    setIsPickupStore(false);
  };

  const handleConfirm = async () => {
    const result = await mutateAsync()
    setPurchaseCode(result)
    setIsConfirmedStore(true);
    setIsPickupStore(false);
  };

  return (
    <Modal
      open={!!isOpen}
      onClose={() => setIsPickupStore(false)}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ModalLayout
        sx={{ maxWidth: '40rem' }}
        headerModal={
          <HeadModal
            onClose={() => setIsPickupStore(false)}
            title={<Typography variant='h5'>Recojo en Tienda</Typography>}
            icon={
              <IconButton onClick={handleBack}>
                <ArrowBackIosIcon
                  onClick={handleBack}
                  sx={{ cursor: 'pointer' }}
                />
              </IconButton>
            }
          />
        }
      >
        {content}
        {
          isLoading? 
            <CircularProgress /> 
            : <FooterModal
            onClick={handleConfirm}
              nameButton='Confirmar pedido'
              infoMessage='No existe costo de envío por ser recojo en tienda.'
              sx={{
                display: 'flex',
                flexDirection: 'column-reverse',
                marginTop: '2rem',
              }}
            />
        }
        
      </ModalLayout>
    </Modal>
  );
}
