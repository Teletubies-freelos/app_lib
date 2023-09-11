import { Box, Modal, Typography } from "@mui/material";
import { Button } from "../../../../packages/ui/src";
import { useCart } from "../hooks/useCart";

export default function CartFloat() {
  const { openCartFloat, changeFloatCart } = useCart();

  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      onClose={changeFloatCart}
      open={openCartFloat}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor : (theme)=>theme.palette.background.default,
          width: "100%",
          height: { xs: "5rem", md: "8rem" },
          padding: { xs: "1rem", md: "1rem 6rem" },
          display: "flex",
          justifyContent: { xs: "space-between" },
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="subtitle1" color={(theme)=> theme.palette.text.primary}>
            4 Productos
          </Typography>
          <Typography variant="h6"  color={(theme)=> theme.palette.text.primary} fontWeight="bold">
            S/ 480.00
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
          width={{ xs: "50%", md: "40%" }}
        >
          <Button
            color="primary"
            fullWidth
            label="Seguir Comprando"
            sx={{
              height: "2.6rem",
              display: { xs: "none", md: "block" },
              textTransform: "capitalize",
            }}
            variant="contained"
          />
          <Button
            color="primary"
            fullWidth
            label="Ir al carrito"
            sx={{
              display: { xs: "block", md: "none" },
              height: "2.6rem",
              textTransform: "capitalize",
            }}
            variant="contained"
          />
          <Button
            color="primary"
            fullWidth
            label="Ir al carrito"
            sx={{
              display: { xs: "none", md: "block" },
              height: { xs: "100%", md: "2.6rem" },
              textTransform: "capitalize",
            }}
            variant="outlined"
          />
        </Box>
      </Box>
    </Modal>
  );
}
