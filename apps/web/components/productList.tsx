import type { SxProps } from "@mui/material";
import { Box, MenuItem, Paper, Typography, styled } from "@mui/material";
import { CardProduct, DropDown, Isotype } from "ui";
import { VirtuosoGrid } from "react-virtuoso";
import { useEffect, useState } from "react";
import { useInfiniteGames } from "../hooks/useGames";
import { IOffer } from "../services/Games";

const sxProductListHeader: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 2,
  alignItems: "center",
  gap: 2,
};

function Loading() {
  return <Typography>Loading</Typography>;
}

function ItemContent(
  _index: number,
  { description, price, title, imgUrl }: IOffer,
) {
  return (
    <CardProduct
      alt={description}
      description={description}
      price={price}
      title={title}
      src={imgUrl}
    />
  );
}

const ListContainer: any = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
});

const ItemContainer: any = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "unset",
  },
  [theme.breakpoints.up("md")]: {
    width: "calc(50% - 1rem)",
  },
}));

export default function ProductList() {
  const [page, setPage] = useState(0);
  const { data: products, fetchNextPage } = useInfiniteGames();

  useEffect(() => {
    fetchNextPage({ pageParam: page }).catch((err: unknown) => err);
  }, [page]);

  const loadMore = () => setPage((prev) => prev + 1);

  return (
    <Paper sx={{ width: "100%", padding: "1rem", marginTop: 10 }}>
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
        data={products || []}
        endReached={loadMore}
        itemContent={ItemContent}
        overscan={10}
        style={{ height: 200 }}
        useWindowScroll
      />
    </Paper>
  );
}
