import { Box, TextField, Typography } from '@mui/material';
import SelectModals from '../common/SelectModals';
import { Button, DropDown } from '../../../../../../packages/ui/src';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { setIsConfirmedOrder, setIsPaymentData } from '../../../observables';
export default function BodyPayments() {
  const handleFinish = () => {
    setIsConfirmedOrder(true);
    setIsPaymentData(false);
  };

  return (
    <Box display='flex' flexDirection='column' gap='.75rem' padding='1.4rem'>
      <SelectModals
        label='Tu pedido'
        groupOptions={[
          { id: 1, name: '2 Productos' },
          { id: 2, name: 'opcion 2' },
        ]}
      />
      <DropDown items={[{ value: '1', label: 'primera opcion' }]}></DropDown>
      <DropDown items={[{ value: '1', label: 'primera opcion' }]}></DropDown>

      <TextField
        id='outlined-multiline-flexible'
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
        })}
        placeholder='Agregar comentario (opcional)'
        multiline
        minRows={4}
        maxRows={5}
      />
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        padding='0 1rem'
      >
        <Typography variant='h6'>Costo de delivery</Typography>
        <Typography
          component='p'
          variant='body2'
          sx={(theme) => ({ color: theme.palette.text.secondary })}
        >
          S/ 20.00
        </Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        padding='0 1rem'
      >
        <Typography variant='h6'>Total</Typography>
        <Typography
          component='p'
          variant='body2'
          sx={(theme) => ({ color: theme.palette.text.secondary })}
        >
          S/ 480.00
        </Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        gap='.5rem'
        alignItems='center'
      >
        <InfoOutlinedIcon
          sx={(theme) => ({ color: theme.palette.primary.main })}
        />
        <Typography
          textAlign='center'
          sx={(theme) => ({ color: theme.palette.primary.main })}
        >
          El pago lo realizarás al momento de la entrega en el caso de efectivo
        </Typography>
      </Box>
      <Button
        onClick={handleFinish}
        variant='contained'
        label='Confirmar pedido'
        sx={{ width: '100%', margin: '0 auto' }}
      />
      <Typography
        sx={(theme) => ({
          color: theme.palette.text.secondary,
          textAlign: 'center',
        })}
      >
        Al hacer click en confirmar, acepto los términos de uso y Políticas de
        privacidad
      </Typography>
    </Box>
  );
}
