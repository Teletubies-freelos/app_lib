import { MRT_ColumnDef } from 'material-react-table';

export const listColumns: MRT_ColumnDef[] = [
  {
    header: 'Id',
    accessorKey: 'order_id',
  },
  {
    header: 'Nombre del cliente',
    accessorKey: 'client_name',
  },
  {
    header: 'Direccion',
    accessorKey: 'address',
  },
  {
    header: 'Telefono',
    accessorKey: 'phone',
  },
  {
    header: 'Metodo de pago',
    accessorKey: 'payment_method',
  },
  {
    header: 'Estado de Pago',
    accessorKey: 'payment_state',
  },
  {
    header: 'Codigo de Pago',
    accessorKey: 'code',
  },
  {
    header: 'Total',
    accessorKey: 'total',
  },
  {
    header: 'Fecha',
    accessorKey: 'create_date',
  },
  {
    header: 'Productos',
    accessorKey: 'products',
  },
];
