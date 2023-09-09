import { Box, Toolbar } from "@mui/material";

interface NavBarProps {
  cartComponent?: JSX.Element;
  mainLogo?: JSX.Element;
  navigatorLinks?: JSX.Element;
  searchBar?: JSX.Element;
  actionsComponent?: JSX.Element;
}

const sxMainBar = {
  width: "100%",
  display: "flex",
  gap: "3rem",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function NavBar({
  cartComponent,
  mainLogo,
  navigatorLinks,
  actionsComponent,
  searchBar,
}: NavBarProps) {
  return (
    <Toolbar sx={{ flexDirection: "column", marginBottom: "3rem" }}>
      <Box sx={sxMainBar}>
        {mainLogo}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "40%",
          }}
        >
          {searchBar}
        </Box>
        {actionsComponent}
        <Box display="flex" justifyContent="end" alignItems="center" gap="1rem">
          {navigatorLinks}
          {cartComponent}
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>{searchBar}</Box>
    </Toolbar>
  );
}
