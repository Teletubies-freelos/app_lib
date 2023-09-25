import { Button, Stack, TextField } from '@mui/material';
import { Authenticated } from '../../components/authenticated';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { dataContext } from '../../context/data';
import { setIsOpenCategory } from '../../observables';
import CreateModal from '../../components/modals/CreateModal';
import List from '../../components/categories/List';

interface ICategory {
  name: string;
}

export default function Categories() {
  const { register, handleSubmit } = useForm<ICategory>();
  const { categories } = useContext(dataContext);
  const { mutate } = useMutation(
    async (payload: string) => await categories?.createOne(payload),
  );

  const onSubmit = (data: ICategory) => {
    mutate(data.name);
  };

  return (
    <Authenticated>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ padding: '1rem' }} gap='1rem'>
          <TextField label='Nombre de la categoria' {...register('name')} />
          <Button variant='contained' type='submit'>
            Agregar Categoria
          </Button>
          <List />
        </Stack>
      </form>
      <Stack>
        <Button variant='contained' onClick={() => setIsOpenCategory(true)}>
          {' '}
          Anadir Productos
        </Button>
        <CreateModal />
      </Stack>
    </Authenticated>
  );
}
