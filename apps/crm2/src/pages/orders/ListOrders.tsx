import MaterialReactTable from 'material-react-table';
import { listColumns } from './columns';
import { useOrders } from '../../hooks/getOrders';

const ListOrders = () => {
  const { data } = useOrders();

  return (
    <MaterialReactTable
      columns={listColumns}
      data={data ?? []}
      enableStickyHeader
      muiTableContainerProps={{
        sx: {
          maxHeight: '75vh',
        },
      }}
    />
  );
};

export default ListOrders;
