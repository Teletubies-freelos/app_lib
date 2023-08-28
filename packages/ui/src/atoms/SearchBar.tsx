import { ReactNode } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";

import { SubmitHandler, useForm } from "react-hook-form";

export interface ISearch {
  search: string;
}
interface SearchBarProps {
  placeHolder?: string;
  searchButtonContent?: ReactNode;
  direction: "row" | "column";
  btnVariant: "text" | "outlined" | "contained";
  stylesButton?: string;
  onSubmit: SubmitHandler<ISearch>;
}

export default function SearchBar({
  placeHolder,
  searchButtonContent,
  direction = "row",
  btnVariant = "outlined",
  stylesButton,
  onSubmit,
}: SearchBarProps) {
  const { register, handleSubmit } = useForm<ISearch>();

  return (
    <Stack
      direction={direction}
      gap="1rem"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        placeholder={placeHolder}
        id="input-with-icon-textfield"
        inputProps={register("search")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Button variant={btnVariant} className={stylesButton}>
        {searchButtonContent}
      </Button>
    </Stack>
  );
}
