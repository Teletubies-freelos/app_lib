import { MaterialReactTable } from 'material-react-table'
import { lisColumns } from './config'
import { useGetProducts } from '../../hooks/getProducts'

export default function ListProducts(){
  const { data , setPage, pagination } = useGetProducts()
  
  return(
    <MaterialReactTable 
      manualExpanding={true}
      muiTableContainerProps={{
        sx:{
          maxHeight: '80vh'
        }
      }}
      columns={lisColumns}
      onPaginationChange={setPage}
      data={data ?? []}
      state={{
        pagination
      }}
    />
  )
}
