import { ReactNode } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";

export interface ISearch{
  search: string;
}
interface SearchBarProps {
  placeHolder?: string;
  searchButtonContent?: ReactNode;
  onSubmit: SubmitHandler<ISearch>;
}

export default function SearchBar({ placeHolder,  searchButtonContent, onSubmit }:SearchBarProps){
  const { register, handleSubmit } = useForm()

  
  return(
    <Stack direction='row' gap='1rem' component='form' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        placeholder={placeHolder}
        id="input-with-icon-textfield"
        inputProps={register('search')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Button variant="outlined" >
        {searchButtonContent}
      </Button>
    </Stack>
  ) 
}
