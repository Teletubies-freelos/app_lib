import { VirtuosoGrid } from "react-virtuoso";
import { useState } from "react";

import { CardProduct, DropDown, Isotype } from "../../../../../packages/ui/src";
import { CardProductProps } from "ui/src/molecules/CardProduct";
import {
  Box,
  MenuItem,
  Paper,
  SxProps,
  Typography,
  styled,
} from "@mui/material";

const defaultProducts = Array.from({ length: 10 }).map(() => ({
  alt: "Spiderman",
  description: "Juego de Spiderman",
  price: 188,
  src: "https://m.media-amazon.com/images/I/815aKWcEkEL.jpg",
  title: "Spiderman",
  previousPrice: 189,
}));

const Loading = () => <Typography>Loading</Typography>;

const ItemContent = (_index: number, product: CardProductProps) => (
  <CardProduct {...product} />
);

//@ts-ignore
const ListContainer: any = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
});

//@ts-ignore
const ItemContainer: any = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "unset",
  },
  [theme.breakpoints.up("md")]: {
    width: "calc(50% - 1rem)",
  },
}));

const sxProductListHeader: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 2,
  alignItems: "center",
  gap: 2,
};

export default function ProductsList() {
  const [products, setProducts] = useState(defaultProducts);

  const loadMore = () => {
    setTimeout(() => {
      setProducts((prev) => [...prev, ...defaultProducts]);
    }, 1000);
  };

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
        useWindowScroll
        style={{ height: 300 }}
        data={products}
        endReached={loadMore}
        overscan={10}
        itemContent={ItemContent}
        components={{
          Footer: Loading,
          Item: ItemContainer,
          List: ListContainer,
        }}
      />
    </Paper>
  );
}
