import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import { useProducts } from "../hooks/useProducts";

export interface ISearch {
  search: string;
}
interface SearchBarProps {
  placeHolder?: string;
  direction?: "row" | "column";
}

export default function CustomSearchBar({
  placeHolder,
  direction="row"
}: SearchBarProps) {
  const { products } = useProducts();

  return (
    <Stack
      width="100%"
      direction={direction}
      gap="1rem"
    >
      <Autocomplete
        freeSolo
        disablePortal
        autoHighlight
        id="combo-box-demo"
        options={products ?? []}
        getOptionLabel={(option) => option.title}
        sx={{
          width: 300,
          "& .MuiAutocomplete-popper": {
            padding: "1rem",
            gap: ".5rem"
          }
        }}
        renderOption={(props, option) => (
          <Box component="li" {...props} sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img src={option.src} alt={option.alt} width={36}/>
            <Typography>
              { option.title }
            </Typography>
          </Box>
        )}
        renderInput={(params) => <TextField
          {...params} 
          sx={(theme) => ({
            width: "100%",
            backgroundColor: theme.palette.common.white,
            borderRadius: ".25rem",
            "& input": { color: "#434343" },
          })}
          placeholder={placeHolder}
          id="input-with-icon-textfield"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
          variant="outlined"
        />
        }
      />
    </Stack>
  );
}
