import { Box, Toolbar } from "@mui/material";
import MainLogo from "../atoms/MainLogo";
import SearchBar from "../atoms/SearchBar";
import { SubmitHandler } from "react-hook-form";
import type { ISearch } from "../atoms/SearchBar";

interface NavBarProps {
  onSearch?: SubmitHandler<ISearch>;
  cartComponent?: JSX.Element;
}

const sxMainBar = {
  width: "100%",
  display: "flex",
  gap: "3rem",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function NavBar({ onSearch, cartComponent }: NavBarProps) {
  return (
    <Toolbar sx={{ flexDirection: "column" }}>
      <Box sx={sxMainBar}>
        <MainLogo />
        {onSearch && (
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchBar
              searchButtonContent="Buscar"
              onSubmit={onSearch as SubmitHandler<ISearch>}
            />
          </Box>
        )}
        {cartComponent}
      </Box>
      {onSearch && (
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <SearchBar
            searchButtonContent="Buscar"
            onSubmit={onSearch as SubmitHandler<ISearch>}
          />
        </Box>
      )}
    </Toolbar>
  );
}
