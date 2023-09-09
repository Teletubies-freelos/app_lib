import { ReactNode } from "react";
import { SearchOutlined } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  type ButtonProps,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

export interface ISearch {
  search: string;
}
interface SearchBarProps {
  placeHolder?: string;
  searchButtonContent?: ReactNode;
  direction?: "row" | "column";
  btnVariant?: "text" | "outlined" | "contained";
  stylesButton?: ButtonProps;
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
      width="100%"
      direction={direction}
      gap="1rem"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: ".25rem",
          "& input": { color: "#434343" },
        }}
        placeholder={placeHolder}
        id="input-with-icon-textfield"
        inputProps={register("search")}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                color: (theme) => theme.palette.primary.main,
              }}
            >
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Button variant={btnVariant} {...stylesButton}>
        {searchButtonContent}
      </Button>
    </Stack>
  );
}
