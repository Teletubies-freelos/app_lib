import {
  MainLogo,
  NavBar,
  CartIcon,
  ColorSwitch,
  SearchBar,
  Button,
} from "../../../../../packages/ui/src";
import { GeneralLayout } from "../../../../web2/src/layout/GeneralLayout";
import NavLinks from "../../../../web2/src/components/NavLinks";
import { Box, Stack, Typography } from "@mui/material";

const content = (
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
        <Typography fontSize=".9rem" fontWeight="400" marginTop="2.25rem">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Typography>
      ))}
    </Stack>
  </Box>
);

export default function PageContent() {
  return (
    <GeneralLayout
      navBar={
        <NavBar
          cartComponent={<CartIcon />}
          searchBar={
            <SearchBar
              onSubmit={() => 2}
              buttonSearch={<Button label="buscar" variant="contained" />}
            />
          }
          mainLogo={<MainLogo />}
          actionsComponent={<ColorSwitch onChange={() => 4} overrideCheckBg />}
        />
      }
    >
      {content}
    </GeneralLayout>
  );
}
