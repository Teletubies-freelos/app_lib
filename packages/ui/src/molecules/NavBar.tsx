'use client'

import { Box, Toolbar } from "@mui/material";
import { MainLogo, SearchBar } from "..";
import { SubmitHandler } from "react-hook-form";
import type { ISearch } from "../atoms/SearchBar";
import { useCallback } from "react";


interface NavBarProps{
  onSearch?: SubmitHandler<ISearch>;
  cartComponent?: JSX.Element;
}

const sxMainBar = {
  width: '100%', 
  display: 'flex', 
  gap: '3rem', 
  justifyContent: 'space-between', 
  alignItems: 'center'
}


export default function NavBar({ onSearch, cartComponent }: NavBarProps){
  const Search = useCallback(
    ()=> <SearchBar 
      searchButtonContent='Buscar' 
      onSubmit={onSearch as SubmitHandler<ISearch>} 
    />, 
    [onSearch]
  )

  return (
    <Toolbar sx={{flexDirection: 'column'}}>
      <Box sx={sxMainBar}>
        <MainLogo />
        {onSearch && <Box sx={{display: {xs: 'none', sm: 'block'}}}>
          <Search />
        </Box> }
        {cartComponent}
      </Box>
      {
        onSearch && <Box sx={{display: {xs: 'block', sm: 'none'}}}>
        <Search />
        </Box> 
      }
    </Toolbar>
  )
}
