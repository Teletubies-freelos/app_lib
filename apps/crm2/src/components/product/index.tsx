import { Box, InputAdornment, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { dataContext } from '../../context/data';
import { CreateGamesPayload } from '../../services/products';

interface ProductData {
  name: string;
  price: number;
  priceOffer?: number;
  description?: string;
}

export const Product = ({
  name,
  price,
  description,
  priceOffer,
}: ProductData) => {
  const { register, handleSubmit } = useForm<ProductData>();

  const { products } = useContext(dataContext);

  const { mutate } = useMutation(
    async (payload: CreateGamesPayload) => await products?.createOne(payload),
  );

  const onSubmit: SubmitHandler<ProductData> = ({
    description,
    name,
    price,
    priceOffer,
  }) => {
    mutate({
      description,
      name,
      offer_price: priceOffer,
      price,
    });
  };

  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        defaultValue={name}
        required
        variant='outlined'
        label='Nombre'
        {...register('name')}
      />
      <TextField
        defaultValue={description}
        variant='outlined'
        label='Descripción'
        {...register('description')}
      />
      <TextField
        required
        defaultValue={price}
        variant='outlined'
        label='Precio'
        InputProps={{
          startAdornment: <InputAdornment position='start'>S/.</InputAdornment>,
        }}
        {...register('price')}
      />
      <TextField
        defaultValue={priceOffer}
        variant='outlined'
        label='Precio oferta'
        InputProps={{
          startAdornment: <InputAdornment position='start'>S/.</InputAdornment>,
        }}
        {...register('priceOffer')}
      />
    </Box>
  );
};
