import { Modal, Stack, SxProps } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Typography from '@mui/material/Typography';
import { LabelStepStatus } from '../../../../../../packages/ui/src';
import totalMoney from '../common/total.svg';
import { setIsConfirmedOrder } from '../../../observables';
import { useGetIndexedDb } from '../../../hooks/useGetIndexedDb';
import { PRICE_DELIVERY } from '../../../utils';

interface ConfirmedOrderProps {
  footer: JSX.Element;
  isOpen: boolean;
  infoPayment?: JSX.Element;
  priceDelivery?: JSX.Element;
  stepStatus: JSX.Element;
  sx?: SxProps;
}

export default function ConfirmedOrder({
  isOpen,
  footer,
  infoPayment,
  priceDelivery,
  stepStatus,
  sx,
}: ConfirmedOrderProps) {
  const code = sessionStorage.getItem('code') || '';
  const {
    dataPrice: { data: total },
  } = useGetIndexedDb();

  return (
    <Modal
      open={!!isOpen}
      onClose={() => setIsConfirmedOrder(false)}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Stack
        sx={(theme) => ({
          background: theme.palette.background.default,
          maxWidth: '40rem',
          minHeight: '40rem',
          width: '100%',
          borderRadius: ' 0.3rem',
          padding: '2rem',
          justifyContent: 'center',
        })}
      >
        <Stack alignItems='center'>
          <CheckCircleOutlineOutlinedIcon
            sx={(theme) => ({
              color: theme.palette.primary.main,
              height: '3.875rem',
              width: '3.875rem',
            })}
          />
          <Typography
            variant='h6'
            sx={(theme) => ({ color: theme.palette.primary.main })}
          >
            ¡Pedido Confirmado!
          </Typography>
          {stepStatus}
          {infoPayment}
        </Stack>
        <Stack marginTop='1.5rem'>
          {priceDelivery}
          <LabelStepStatus
            property='TOTAL'
            icon={<img src={totalMoney} alt='money' />}
            value={`S/. ${(total + PRICE_DELIVERY).toFixed()}`}
            sx={{
              fontWeight: 'bold !important',
              fontSize: '1.1rem !important',
            }}
          />
          <LabelStepStatus
            property='Número de pedido'
            value={code}
            sx={{
              fontSize: '1rem !important',
              marginTop: '1.5rem',
            }}
          />
        </Stack>
        {footer}
      </Stack>
    </Modal>
  );
}
