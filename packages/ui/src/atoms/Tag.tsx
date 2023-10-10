import { Box, Typography } from "@mui/material";
import Discount from "./Discount";

export default function Tag() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "7px 9px",
        alignItems: "center",
        gap: "9px",
        borderRadius: "5px",
        width: "fit-content",
        backgroundColor: "success.light",
      }}
    >
      <Discount />
      <Typography
        variant="body1"
        sx={{
          fontSize: 14,
          color: "success.dark",
          fontWeight: 400,
        }}
      >
        Oferta
      </Typography>
    </Box>
  );
}
