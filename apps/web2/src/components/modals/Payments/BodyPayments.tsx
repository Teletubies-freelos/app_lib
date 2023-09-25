import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Button } from '../../../../../../packages/ui/src';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { setIsConfirmedOrder, setIsPaymentData } from '../../../observables';
import { useGetIndexedDb } from '../../../hooks/useGetIndexedDb';
import { cartClient } from '../../../modules';
import { useQuery } from '@tanstack/react-query';
import CustomAcordion from '../common/CustomAcordion';
import { useCallback, useEffect, useState } from 'react';
import { PAYMENT_METHODS } from '../../../utils';
import { SelectChangeEvent } from '@mui/material';
import { IOffer } from '../../../types/games';

interface IUserData {
  address: string | null;
  fullName: string | null;
  phone: string | null;
}

export default function BodyPayments() {
  const [userData, setUserData] = useState<IUserData>({
    address: sessionStorage.getItem('address') || '',
    fullName: sessionStorage.getItem('fullName') || '',
    phone: sessionStorage.getItem('phone') || '',
  });

  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const {
    dataProducts: { data },
    dataPrice: { data: total },
  } = useGetIndexedDb();

  const { data: totalCount } = useQuery({
    queryKey: ['totalCount'],
    queryFn: () => cartClient.getTotalCount(),
  });

  const handleFinish = () => {
    setIsConfirmedOrder(true);
    setIsPaymentData(false);
  };

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setSelectedMethod(event.target.value);
    },
    [setSelectedMethod],
  );

  const renderProduct = useCallback(
    ({ name, price, product_id, quantity }: IOffer) => (
      <Box
        display='flex'
        justifyContent='space-between'
        padding='.5rem 0'
        key={product_id}
      >
        <Typography>
          {name} x {quantity}
        </Typography>
        <Typography>S/ {price}</Typography>
      </Box>
    ),
    [],
  );

  const { address, fullName, phone } = userData;

  return (
    <Box display='flex' flexDirection='column' gap='.75rem' padding='1.4rem'>
      <CustomAcordion
        header={
          <Stack>
            <Typography sx={({ palette }) => ({ color: palette.text.primary })}>
              Tu Pedido
            </Typography>
            <Typography
              sx={({ palette }) => ({ color: palette.text.secondary })}
            >
              {totalCount} Productos
            </Typography>
          </Stack>
        }
        content={<>{data?.map(renderProduct)}</>}
      />
      <CustomAcordion
        header={
          <Stack>
            <Typography sx={({ palette }) => ({ color: palette.text.primary })}>
              Informacion de Entrega
            </Typography>
          </Stack>
        }
        content={
          <Stack justifyContent='space-between' padding='.5rem 0'>
            <Box
              display='flex'
              justifyContent='space-between'
              padding='.5rem 0'
            >
              <Typography
                sx={({ palette }) => ({ color: palette.text.secondary })}
              >
                Direccion
              </Typography>
              <Typography
                sx={({ palette }) => ({ color: palette.text.secondary })}
              >
                {address}
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              padding='.5rem 0'
            >
              <Typography
                sx={({ palette }) => ({ color: palette.text.secondary })}
              >
                Nombre
              </Typography>
              <Typography
                sx={({ palette }) => ({ color: palette.text.secondary })}
              >
                {fullName}
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              padding='.5rem 0'
            >
              <Typography
                sx={({ palette }) => ({ color: palette.text.secondary })}
              >
                Telefono
              </Typography>
              <Typography
                sx={({ palette }) => ({ color: palette.text.secondary })}
              >
                {phone}
              </Typography>
            </Box>
          </Stack>
        }
      />

      <Select value={selectedMethod} onChange={handleChange}>
        {PAYMENT_METHODS.map(({ label, value }) => (
          <MenuItem key={value} value={label}>
            {label}
          </MenuItem>
        ))}
      </Select>

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
          S/ {total}
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
