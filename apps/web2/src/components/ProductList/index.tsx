import {
  Box,
  MenuItem,
  Paper,
  type SxProps,
} from "@mui/material";

import { VirtuosoGrid } from "react-virtuoso";

import {  DropDown, Isotype } from "../../../../../packages/ui/src";


import { useProducts } from "../../hooks/useProducts";
import { Loading } from "./Loading";
import { ItemContainer, ItemContent, ListContainer } from "./Containers";

const sxProductListHeader: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 2,
  alignItems: "center",
  gap: 2,
};



export default function ProductsList() {
  const { products, fetchNextPage } = useProducts()

  const loadMore = () => {
    fetchNextPage()
  };

  return (
    <Paper
      sx={{
        width: "100%",
        padding: {
          xs: "2rem 1rem",
          sm: "2rem 3.5rem",
          md: "2rem 5.5rem",
          lg: "2rem 7.5rem",
        },
      }}
    >
      <Box sx={sxProductListHeader}>
        <Isotype />
        <DropDown sxForm={{ width: { xs: "90%", md: "30%" } }}>
          <MenuItem value={1}>Juegos PS4</MenuItem>
          <MenuItem value={2}>Juegos PS5</MenuItem>
          <MenuItem value={3}>Juegos Switch</MenuItem>
          <MenuItem value={4}>Juegos Xbox</MenuItem>
        </DropDown>
      </Box>
      <VirtuosoGrid
        components={{
          Footer: Loading,
          Item: ItemContainer,
          List: ListContainer,
        }}
        data={products ?? []}
        endReached={loadMore}
        itemContent={ItemContent}
        overscan={5}
        style={{ height: 300 }}
        useWindowScroll
      />
    </Paper>
  );
}
