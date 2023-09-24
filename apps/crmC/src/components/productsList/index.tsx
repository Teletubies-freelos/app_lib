import { List, useDataGrid } from "@refinedev/mui"
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import { useList, useMany } from "@refinedev/core";
import { useState } from "react";

export const ProductsList = ()=>{
  const { dataGridProps } = useDataGrid();

  const [page, setPage] = useState(0)

  const {data} = useList({
    resource: 'products',
    pagination: {
      current: page
    }
  })

  console.log(data)

  return (<List>
    <DataGrid {...dataGridProps} autoHeight columns={columns} rows={data?.data ?? []}/>
  </List>)
}
