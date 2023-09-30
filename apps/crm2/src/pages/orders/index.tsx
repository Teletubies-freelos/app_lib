import { Stack, Typography } from '@mui/material';
import ListOrders from './ListOrders';

const Orders = () => {
  return (
    <Stack gap='1rem'>
      <Typography variant='h1' padding='1rem'>
        Registro de Ordenes
      </Typography>
      <ListOrders />
    </Stack>
  );
};

export default Orders;
