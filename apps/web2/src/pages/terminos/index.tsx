import { Link } from "react-router-dom";
import {
  Button,
  CartIcon,
  ColorSwitch,
  MainLogo,
  NavBar,
  SearchBar,
} from "../../../../../packages/ui/src";
import { GeneralLayout } from "../../layout/GeneralLayout";

import { Box, Stack, Typography } from "@mui/material";

import { useToggleColor } from "../../providers/theme";
import NavLinks from "../../components/NavLinks";

export default function Terminos() {
  const toggleColor = useToggleColor();

  return (
    <GeneralLayout
      navBar={
        <NavBar
          actionsComponent={
            <ColorSwitch onChange={toggleColor} overrideCheckBg />
          }
          cartComponent={
            <CartIcon />
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 2rem 2rem 2rem",
        }}
      >
        <Stack sx={{ maxWidth: "60rem" }}>
          <Typography variant="h3" fontSize="1.75rem" fontWeight="400">
            Términos y condiciones
          </Typography>
          {Array.from({ length: 3 }).map((_, i) => (
            <Typography
              key={i}
              fontSize=".9rem"
              fontWeight="400"
              marginTop="2.25rem"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </Typography>
          ))}
        </Stack>
      </Box>
    </GeneralLayout>
  );
}
