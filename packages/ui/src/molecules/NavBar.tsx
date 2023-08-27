import { Container, Toolbar } from "@mui/material";
import { MainLogo, SearchBar } from "..";
import { SubmitHandler } from "react-hook-form";
import type { ISearch } from "../atoms/SearchBar";


interface NavBarProps{
  onSearch?: SubmitHandler<ISearch>
}

export default function NavBar({ onSearch }: NavBarProps){
  return (
    <Container>
      <Toolbar sx={{gap: '1rem'}}>
        <MainLogo />
        {onSearch && <SearchBar searchButtonContent="Buscar" onSubmit={onSearch}/>}
      </Toolbar>
    </Container>)
}
