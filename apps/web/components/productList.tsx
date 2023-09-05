import type { SxProps } from "@mui/material";
import { Box, MenuItem, Paper, Typography, styled } from "@mui/material";
import type { MouseEventHandler } from "react";
import { useState } from "react";
import { CardProduct, DropDown, Isotype } from "ui";
import { VirtuosoGrid } from "react-virtuoso";

const defaultProducts = Array.from({ length: 10 }).map(() => ({
  alt: "Spiderman",
  description: "Juego de Spiderman",
  price: 188,
  src: "https://m.media-amazon.com/images/I/815aKWcEkEL.jpg",
  title: "Spiderman",
  previousPrice: 189,
}));

interface CardProductProps {
  alt: string;
  src: string;
  title: string;
  description: string;
  price: number;
  previousPrice?: number;
  onAdd?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function Loading() {
  return <Typography>Loading</Typography>;
}

function ItemContent(_index: number, product: CardProductProps) {
  return <CardProduct {...product} />;
}

const sxProductListHeader: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 2,
  alignItems: "center",
  gap: 2,
};

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

export default function ProductsList() {
  const [products, setProducts] = useState(defaultProducts);

  const loadMore = () => {
    setTimeout(() => {
      setProducts((prev) => [...prev, ...defaultProducts]);
    }, 1000);
  };

  if (typeof window === "undefined") {
    return null;
  }

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
        data={products}
        endReached={loadMore}
        itemContent={ItemContent}
        overscan={10}
        style={{ height: 300 }}
        useWindowScroll
      />
    </Paper>
  );
}
