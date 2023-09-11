import {
  Stack,
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import CustomTextField from "../common/CustomTextField";
import SelectModals from "../common/SelectModals";
import { Button } from "../../../../../../packages/ui/src";

export default function BodyMyData() {
  return (
    <Stack gap=".75rem" padding="1.4rem">
      <Box display="flex" gap="1rem">
        <CustomTextField width="50%" label="Nombres y Apellidos" />
        <CustomTextField width="50%" label="Teléfono" />
      </Box>
      <CustomTextField width="100%" label="Correo electrónico" />
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Soy de Lima Metropolitana"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Soy de Provincia"
          />
        </RadioGroup>
      </FormControl>
      <SelectModals groupOptions={[{ id: 1, name: "hola" }]} label="Distrito" />
      <CustomTextField width="100%" label="Dirección" />
      <CustomTextField width="100%" label="Referencia" />
      <Button
        variant="contained"
        label="Siguiente"
        sx={{ textTransform: "capitalize", marginTop: "2.25rem" }}
      />
    </Stack>
  );
}
