import { Stack, SxProps } from "@mui/material";
import {
  CartIcon,
  NavBar,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  XboxLogo,
} from "../../../../../packages/ui/src";

import Hero from "../Hero/Hero.example";

const sxInnerStack: SxProps = {
  height: {
    xs: "1rem",
    md: "unset",
  },
  "& svg": { width: "5rem" },
};

// TODO: add Container for responsive
export default function Header() {
  return (
    <Stack sx={{ width: "100%" }} spacing={6}>
      <NavBar cartComponent={<CartIcon />} onSearch={console.log} />
      <Hero />
      <Stack
        sx={sxInnerStack}
        direction="row"
        spacing={1}
        justifyContent={"space-evenly"}
      >
        <PlayStation4Logo />
        <PlayStation5Logo />
        <NintendoLogo />
        <XboxLogo />
      </Stack>
    </Stack>
  );
}
