import{a as n,j as s,F as a}from"./jsx-runtime-dfa81c13.js";import{M as m,d as p}from"./index-f6d16ce1.js";import{W as d}from"./WithTheme-9505c6f2.js";import{P as o}from"./ProductsList.example-e02d311e.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-88f0bdb0.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-15b115a7.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-c4ced888.js";import"./index-356e4a49.js";import"./appGames-c040a519.js";import"./ListContainers-9ea7e573.js";import"./styled-1922bd45.js";import"./createTheme-98f63f06.js";import"./generateUtilityClasses-b6bf937b.js";import"./Box-04874925.js";import"./useIsFocusVisible-e5f6c995.js";import"./Typography-cad46f3f.js";const c=`import { VirtuosoGrid } from "react-virtuoso";
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
`;function r(t){const e=Object.assign({p:"p"},i(),t.components);return s(a,{children:[n(m,{title:"Organisms/Products",component:o}),`
`,n(e.p,{children:"Ejemplo de Infinite list responsivo"}),`
`,`
`,n(p,{code:c,dark:!0}),`
`,n("div",{style:{display:"grid",placeItems:"center"},children:n(d,{children:n(o,{})})})]})}function O(t={}){const{wrapper:e}=Object.assign({},i(),t.components);return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}export{O as default};
//# sourceMappingURL=Product-40187532.js.map
