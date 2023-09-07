import { Box, Toolbar } from "@mui/material";
import SearchBar from "../atoms/SearchBar";
import { SubmitHandler } from "react-hook-form";
import type { ISearch } from "../atoms/SearchBar";
interface NavBarProps {
  cartComponent?: JSX.Element;
  mainLogo?: JSX.Element;
  navigatorLinks?: JSX.Element;
  onSearch?: SubmitHandler<ISearch>;
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
  onSearch,
}: NavBarProps) {
  return (
    <Toolbar sx={{ flexDirection: "column", marginBottom: "3rem" }}>
      <Box sx={sxMainBar}>
        {mainLogo}
        {onSearch && (
          <Box sx={{ display: { xs: "none", md: "block" }, width: "40%" }}>
            <SearchBar
              searchButtonContent="Buscar"
              onSubmit={onSearch as SubmitHandler<ISearch>}
            />
          </Box>
        )}
        <Box display="flex" justifyContent="end" alignItems="center" gap="1rem">
          {navigatorLinks}
          {cartComponent}
        </Box>
      </Box>
      {onSearch && (
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <SearchBar
            searchButtonContent="Buscar"
            onSubmit={onSearch as SubmitHandler<ISearch>}
          />
        </Box>
      )}
    </Toolbar>
  );
}
