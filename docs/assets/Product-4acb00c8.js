import{a as n,j as i,F as a}from"./jsx-runtime-692dcd6a.js";import{M as m,d as p}from"./index-3d26e837.js";import{W as d}from"./WithTheme-7dfc2a91.js";import{P as o}from"./ProductsList.example-53f23a68.js";import{u as s}from"./index-8df0e5c0.js";import"./index-a8142830.js";import"./_commonjsHelpers-23102255.js";import"./iframe-67d3ef6e.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-eaf302a3.js";import"./index-4f45c9c0.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-8a3569a9.js";import"./index-356e4a49.js";import"./appGames-4dcb3c69.js";import"./ListContainers-54c67dfe.js";import"./styled-80536b6e.js";import"./generateUtilityClasses-d84237f9.js";import"./Box-ec9aa29d.js";import"./useIsFocusVisible-cffe55e3.js";import"./Typography-66bb1eea.js";const c=`import { VirtuosoGrid } from "react-virtuoso";
import { useCallback, useState } from "react";

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
`;function r(t){const e=Object.assign({p:"p"},s(),t.components);return i(a,{children:[n(m,{title:"Organisms/Products",component:o}),`
`,n(e.p,{children:"Ejemplo de Infinite list responsivo"}),`
`,`
`,n(p,{code:c,dark:!0}),`
`,n("div",{style:{display:"grid",placeItems:"center"},children:n(d,{children:n(o,{})})})]})}function F(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}export{F as default};
//# sourceMappingURL=Product-4acb00c8.js.map
