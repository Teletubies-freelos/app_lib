import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: "Id",
    type: "string",
    minWidth: 50
  },
  {
    field: 'name',
    headerName: 'Nombre'
  },
  {
    field: 'description',
    headerName: 'Descripcion'
  },
  {
    field: 'price_offer',
    headerName: 'Precio oferta'
  },
  {
    field: 'quantity',
    headerName: 'Cantidad'
  },
  {
    field: 'image_url',
    headerName: 'Url de imagen'
  }
]
