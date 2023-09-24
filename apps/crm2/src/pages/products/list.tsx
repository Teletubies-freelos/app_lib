import { MaterialReactTable } from 'material-react-table';
import { lisColumns } from './config';
import { useGetProducts } from '../../hooks/getProducts';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import CreateModal from '../../components/modals/CreateModal';

export const ListProducts = () => {
  const { data, setPage, pagination } = useGetProducts();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack gap={'1rem'}>
      <MaterialReactTable
        manualExpanding={true}
        muiTableContainerProps={{
          sx: {
            maxHeight: '80vh',
          },
        }}
        columns={lisColumns}
        onPaginationChange={setPage}
        renderTopToolbarCustomActions={() => (
          <>
            <Button onClick={() => setIsOpen(true)} variant='contained'>
              Add Product
            </Button>
            <CreateModal open={isOpen} closeModal={() => setIsOpen(false)} />
          </>
        )}
        data={data ?? []}
        state={{
          pagination,
        }}
      />
    </Stack>
  );
};
