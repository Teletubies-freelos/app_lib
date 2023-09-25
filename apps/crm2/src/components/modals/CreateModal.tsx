//modal mui

import { Modal, Button, Stack, Typography, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { setIsOpenCategory, useIsOpenCategory } from '../../observables';

interface FormValues {
  name: string;
  quantity: number;
  price: number;
  offerPrice: number;
  image: string;
  description: string;
}

const CreateModal = () => {
  //use react hook form
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      quantity: 0,
      price: 0,
      offerPrice: 0,
      image: '',
      description: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const isOpen = useIsOpenCategory();

  return (
    <Modal open={!!isOpen} onClose={() => setIsOpenCategory(false)}>
      <Stack
        sx={{
          height: '100vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          sx={{
            width: '100%',
            maxWidth: '30rem',
            backgroundColor: (theme) => theme.palette.background.paper,
            padding: '1rem',
            borderRadius: '.5rem',
            gap: '1.5rem',
          }}
        >
          <Typography variant='h3' textAlign='center'>
            Producto Nuevo
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap='1rem'>
              <TextField
                label='Nombre del Producto'
                {...register('name', {
                  required: 'El nombre del producto es obligatorio',
                })}
              />
              <TextField
                label='Cantidad'
                type='number'
                {...register('quantity', {
                  required: 'La cantidad del producto es obligatorio',
                })}
              />
              <TextField label='Precio' type='number' {...register('price')} />
              <TextField
                label='Precio Oferta'
                type='number'
                {...register('offerPrice', {
                  required: 'El Precio del producto es obligatorio',
                })}
              />
              <TextField
                label='Url de la imagen del Producto'
                {...register('image', {
                  required: 'La url de la imagen del producto es obligatorio',
                })}
              />
              <TextField
                label='Descripcion del Producto'
                rows={3}
                multiline
                {...register('description', {
                  required: 'La descripcion del producto es obligatorio',
                })}
              />
              <Button variant='contained' type='submit'>
                Guardar
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default CreateModal;
