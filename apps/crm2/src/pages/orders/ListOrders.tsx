import MaterialReactTable from 'material-react-table';
import { listColumns } from './columns';
import { useOrders } from '../../hooks/getOrders';

const ListOrders = () => {
  const { data } = useOrders();
  console.log('%c data :', 'background-color:#048A81', data);
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
