import { Link } from "react-router-dom";
import {
  Button,
  CardHero,
  CartIcon,
  ColorSwitch,
  MainLogo,
  NavBar,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  SearchBar,
  XboxLogo,
} from "../../../../packages/ui/src";
import { GeneralLayout } from "../layout/GeneralLayout";
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import { Stack, SxProps, useTheme } from "@mui/material";
import ProductsList from "../components/ProductList";
import NavLinks from "../components/NavLinks";
import { useGames } from "../hooks/useGames";
import { sxInnerStack } from "./styles";
import { useToggleColor } from "../providers/theme";
import { useMemo} from "react";
import CartIconReactive from "../components/CartIconReactive";

interface IRender {
  img_url?: string;
  description?: string;
}

const render = ({ img_url = "", description = "" }: IRender) => (
  <CardHero
    alt=""
    description={description}
    image={img_url}
    key={img_url ?? ""}
  />
);

export default function Home() {
  const { data } = useGames();

  const toggleColor = useToggleColor();
  const theme = useTheme();
  const noMargin: SxProps = useMemo(()=>(
    {
      margin: "0 !important",
      filter: theme.palette.mode == "dark" ? "invert(1)" : "invert(0)",
    }
  ),[theme.palette.mode])

  return (
    <GeneralLayout
      navBar={
        <NavBar
          actionsComponent={
            <ColorSwitch onChange={toggleColor} overrideCheckBg />
          }
          cartComponent={
            <CartIconReactive/>
          }
          navigatorLinks={<NavLinks />}
          mainLogo={
            <Link to="/">
              <MainLogo sx={{ width: { xs: "60%" } }} />
            </Link>
          }
          searchBar={
            <SearchBar
              onSubmit={() => 4}
              buttonSearch={<Button label="buscar" variant="contained" />}
            />
          }
        />
      }
    >
      <ResponsiveCarousel data={data ?? []} itemRender={render} />
      <Stack
        direction="row"
        gap={{ sm: 6 }}
        justifyContent={{ xs: "space-evenly", sm: "center" }}
        sx={sxInnerStack}
      >
        <PlayStation4Logo sx={noMargin} />
        <PlayStation5Logo sx={noMargin} />
        <NintendoLogo sx={noMargin} />
        <XboxLogo sx={noMargin} />{" "}
      </Stack>
      <ProductsList />
    </GeneralLayout>
  );
}
