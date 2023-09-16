import { Box, Modal, Typography } from "@mui/material";
import { Button } from "../../../../packages/ui/src";
import {
  setIsCartShop,
  setIsWishList,
  useIsWishListOpen,
  usePriceTotalProducts,
  useTotalCountProducts,
} from "../observables";

export default function CartFloat() {
  const isOpen = useIsWishListOpen();
  const handleClose = () => setIsWishList(false);

  const totalPriceProducts = usePriceTotalProducts();
  const quantityProducts = useTotalCountProducts();

  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      onClose={handleClose}
      open={!!isOpen}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "background.default",
          width: "100%",
          height: { xs: "5rem", md: "8rem" },
          padding: { xs: "1rem", md: "1rem 6rem" },
          display: "flex",
          justifyContent: { xs: "space-between" },
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            color="text.primary"
            fontSize={{ xs: ".8rem !important", sm: "1rem !important" }}
          >
            {quantityProducts} Productos
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            fontWeight="bold"
            fontSize={{ xs: ".8rem !important", sm: "1rem !important" }}
          >
            S/ {totalPriceProducts.toFixed(2)}
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
            onClick={() => {
              setIsCartShop(true);
              setIsWishList(false);
            }}
            sx={{
              display: { xs: "block", md: "none" },
              height: "2.6rem",
              textTransform: "capitalize",
            }}
            variant="contained"
          />
          <Button
            onClick={() => {
              setIsCartShop(true);
              setIsWishList(false);
            }}
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
