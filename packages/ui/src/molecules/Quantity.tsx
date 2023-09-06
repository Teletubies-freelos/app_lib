import { Box, SxProps, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";

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

export default function Quantity({
  quantity,
  changeQuantity,
  onDelete,
}: QuantityProps) {
  return (
    <Box sx={stylesBox}>
      <DeleteOutlineIcon
        fontSize="medium"
        onClick={onDelete}
        sx={{ cursor: "pointer" }}
      />
      <Typography
        sx={{
          fontSize: "1.3rem",
          fontWeight: "bold",
        }}
      >
        {quantity}
      </Typography>
      <AddIcon
        fontSize="large"
        sx={{
          color: "primary.main",
          fontWeight: "700",
          cursor: "pointer",
        }}
        onClick={changeQuantity}
      />
    </Box>
  );
}
