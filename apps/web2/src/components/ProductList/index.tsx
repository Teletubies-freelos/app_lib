import { Box, MenuItem, Paper, SelectChangeEvent, type SxProps } from "@mui/material";
import { VirtuosoGrid } from "react-virtuoso";
import { DropDown, Isotype } from "../../../../../packages/ui/src";
import { useFiltedProducts, useProducts } from "../../hooks/useProducts";
import { Loading } from "./Loading";
import { ItemContainer, ListContainer, itemContentRender } from "./Containers";
import Filters from "./Filters";
import { useContext, useMemo } from "react";
import { cartContext } from "../../context/cartContext";
import { useCategories } from "../../hooks/useCategories";
import { setCategoryIdSelected, useCategoryIdSelected } from "../../observables";

const sxProductListHeader: SxProps = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginBottom: 2,
  alignItems: "center",
  gap: 2,
};

export default function ProductsList() {
  const { products, fetchNextPage } = useProducts();
  const { products: filtered } = useFiltedProducts();
  const { data: categories } = useCategories();
  const categoryIdSelected = useCategoryIdSelected();
  const {handleOnClick} = useContext(cartContext)

  const loadMore = () => {
    fetchNextPage();
  };

  const ItemContent= useMemo(()=> itemContentRender(handleOnClick), [])
  
  const filterdProducts = useMemo(() => {
    if(!Number(categoryIdSelected)) return products;

    return filtered
  }, [ categoryIdSelected, products, filtered ])

  const _handleChangeFilter = ({ target }: SelectChangeEvent) => {
    if(!Number(target.value)) return
    
    setCategoryIdSelected(Number(target.value))
  }

  return (
    <Paper
      id="product-list"
      component="section"
      sx={{
        padding: {
          xs: "2rem 1rem",
          sm: "2rem 3.5rem",
          md: "2rem 5.5rem",
          lg: "2rem 7.5rem",
        },
      }}
    >
      <Box sx={sxProductListHeader}>
        <Isotype
          sx={{
            order: "1",
            width: "3.5rem",
          }}
        />
        <DropDown
          value={String(categoryIdSelected)}
          onChange={_handleChangeFilter}
          sxForm={{
            width: { xs: "80%", md: "30%" },
            order: { xs: "2", md: "3" },
          }}
        >
          <MenuItem value={0} disabled>Selecct category</MenuItem>
          { categories?.map(({ category_id, name }) => <MenuItem
              key={`category-${category_id}`}
              value={category_id}
            >
              {name || category_id}
            </MenuItem> )}
        </DropDown>
        <Filters />
      </Box>
      <VirtuosoGrid
        components={{
          Footer: Loading,
          Item: ItemContainer,
          List: ListContainer,
        }}
        data={filterdProducts ?? []}
        endReached={loadMore}
        itemContent={ItemContent}
        overscan={5}
        style={{ height: 200 }}
        useWindowScroll
      />
    </Paper>
  );
}
