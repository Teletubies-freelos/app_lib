import { type MRT_ColumnDef } from 'material-react-table';
import { GamesResponse } from '../../services/products';

export const lisColumns: MRT_ColumnDef<GamesResponse>[] =[
  {
    header: 'Id',
    accessorKey: 'product_id'
  },
  {
    header: 'Descripcion',
    accessorKey: 'description'
  },
  {
    header: 'Url de imagen',
    accessorKey: 'image_url'
  },
  {
    header: 'Nombre',
    accessorKey: 'name'
  },
  {
    header: 'Precio',
    accessorKey: 'price'
  },
  {
    header: 'Precio oferta',
    accessorKey: 'price_offer'
  },
  {
    header: 'Cantidad',
    accessorKey: 'quantity'
  },
  
  
] 
