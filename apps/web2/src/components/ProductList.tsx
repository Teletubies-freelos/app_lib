import {
  Box,
  MenuItem,
  Paper,
  Typography,
  styled,
  type SxProps,
} from "@mui/material";
import type { MouseEventHandler } from "react";
import { useContext, useMemo, useState } from "react";
import { CardProduct, DropDown, Isotype } from "../../../../packages/ui/src";
import { VirtuosoGrid } from "react-virtuoso";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useGames } from "../hooks/useGames";
import { DataContext } from "../context/DataContext";



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
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "2rem",
});

const ItemContainer: any = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "calc(48% - 1rem)",
  },
}));

export default function ProductsList() {
  const { gamesClient } = useContext(DataContext);
  const {data, fetchNextPage} = useInfiniteQuery({
    queryKey: ["list_games"],
    queryFn: ({pageParam=0}) => gamesClient.getPaginatedGames({paginated: {limit: 10, offset: pageParam * 10}}),
    getNextPageParam: (_lastPage, pages) => pages.length/10 ,
  })

  const products:CardProductProps[] | undefined = useMemo(()=> data?.pages.flat().map(({name,description,img_url,price})=> (
    {
    description, 
    price, src:img_url ?? '', 
    alt:name ?? '', 
    title:name ?? '' 
    })) , [data?.pages])

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
