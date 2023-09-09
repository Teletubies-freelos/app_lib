import type { MouseEventHandler } from "react";

import { CardProduct } from "../../../../../packages/ui/src";
import {
  styled,
} from "@mui/material";

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


export function ItemContent(_index: number, product: CardProductProps) {
  return <CardProduct {...product} />;
}


export const ListContainer: any = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "2rem",
});

export const ItemContainer: any = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "calc(48% - 1rem)",
  },
}));
