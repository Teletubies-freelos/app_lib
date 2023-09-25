import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { dataContext } from '../../context/data';
import { CreateGamesPayload } from '../../services/products';
import { Delete } from '@mui/icons-material';

interface ProductData {
  product_id: string | number;
  name: string;
  price: number;
  price_offer?: number;
  description?: string;
  image_url: string;
  quantity: number;
}

export const Product = ({
  product_id,
  name,
  price,
  description,
  price_offer: priceOffer,
  image_url,
  quantity,
}: ProductData) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductData>();
  console.log(errors);
  const { products } = useContext(dataContext);
  const [isDeleted, setIsDeleted] = useState(false);

  const { mutate } = useMutation(
    async (payload: CreateGamesPayload) =>
      await products?.updateOne(product_id, payload),
  );

  const { mutate: mutateDelete } = useMutation(
    async (payload: number | string) => await products?.deleteOne(payload),
    {
      onSuccess: () => {
        setIsDeleted(true);
      },
    },
  );

  const onSubmit: SubmitHandler<ProductData> = ({
    description,
    name,
    price,
    price_offer,
    image_url,
    quantity,
  }) => {
    console.log(image_url);
    mutate({
      product_id,
      description,
      name,
      price_offer,
      price,
      image_url,
      quantity,
    });
  };

  if (isDeleted) return null;

  return (
    <Box>
      <Box
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          marginBlock: '1rem',
          gap: '2rem',
          justifyContent: 'space-between',
          borderRadius: '.5rem',
          border: (theme) => `1px solid ${theme.palette.primary.main}}}`,
        }}
      >
        <Box>
          <TextField
            defaultValue={name}
            required
            variant='outlined'
            label='Nombre'
            {...register('name')}
          />
          <IconButton onClick={() => mutateDelete(product_id)}>
            <Delete />
          </IconButton>
        </Box>
        <TextField
          defaultValue={description}
          variant='outlined'
          label='Descripción'
          {...register('description')}
        />
        <Box display='flex' gap='1rem'>
          <TextField
            required
            defaultValue={price}
            variant='outlined'
            label='Precio'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>S/.</InputAdornment>
              ),
            }}
            {...register('price')}
          />
          <TextField
            defaultValue={priceOffer}
            variant='outlined'
            label='Precio oferta'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>S/.</InputAdornment>
              ),
            }}
            {...register('price_offer')}
          />
        </Box>
        <TextField
          defaultValue={quantity}
          variant='outlined'
          label='Cantidad'
          {...register('quantity')}
        />
        <TextField
          defaultValue={image_url}
          variant='outlined'
          label='Url imagen del producto'
          {...register('image_url')}
        />
        <Button variant='contained' type='submit' fullWidth>
          Actualizar
        </Button>
      </Box>
    </Box>
  );
};
