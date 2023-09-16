import { Box, SxProps, Typography } from "@mui/material";

import {
  Add as AddIcon, 
  Remove, 
  DeleteOutline as DeleteOutlineIcon 
} from "@mui/icons-material";

interface QuantityProps {
  quantity: number;
  changeQuantity: () => void;
  onDelete: () => void;
}

const stylesBox: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  position: { xs: "absolute", sm: "static" },
  right: { xs: "3.6rem", sm: "unset" },
  bottom: { xs: "50%", sm: "unset" },
  transform: { xs: "translate(50%,50%)", sm: "unset" },
};

const sxIcons = {
  color: "primary.main",
  fontWeight: "700",
  cursor: "pointer",
}

export default function Quantity({
  quantity,
  changeQuantity,
  onDelete,
}: QuantityProps) {

  return (
    <Box sx={stylesBox}>
      {
        quantity > 1 ?
          <Remove  onClick={onDelete} sx={sxIcons}/> :
          <DeleteOutlineIcon
            fontSize="medium"
            onClick={onDelete}
            sx={{ cursor: "pointer" }}
          />
        }
      <Typography
        sx={{
          fontSize: "1.3rem",
        }}
      >
        {quantity}
      </Typography>
      <AddIcon
        fontSize="large"
        sx={sxIcons}
        onClick={changeQuantity}
      />
    </Box>
  );
}
