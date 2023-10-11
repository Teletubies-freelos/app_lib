import { useContext } from "react";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";

import { cartContext } from "../../../context/cartContext";
import HeadModal from "../common/HeadModal";
import { ModalLayout, Tag } from "../../../../../../packages/ui/src";
import { setIsProductDetail, setProductDetail, useIsProductDetailOpen, useProductDetail } from "../../../observables";
import { cartClient } from "../../../modules";

export default function ProductDetail() {
  const isOpen = useIsProductDetailOpen();
  const { handleOnClick } = useContext(cartContext);
  const product = useProductDetail();

  const _handleCloseDetail = () => {
    setIsProductDetail(false)
    setProductDetail(null)
  }

  const _handleAddProduct = () => {
    if(!product) return  
  
    cartClient.addProduct({
      imageUrl: product?.src,
      name: product?.title,
      price: product?.price,
      priceDiscount: 0,
      productId: product.title,
      quantity: 1,
    });

    _handleCloseDetail();
    handleOnClick(product.price);
  };

  return (
    <Modal
      onClose={_handleCloseDetail}
      open={!!isOpen}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalLayout
        sx={{ maxWidth: 750 }}
        headerModal={
          <HeadModal
            onClose={_handleCloseDetail}
            title={<Typography variant="h5">Detalle</Typography>}
            icon={<ShoppingBag />}
          />
        }
      >
        <Box>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              marginBottom: "14px"
            }}
          > 
            <Box>
              <img width={200} src={product?.src} alt={product?.alt} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }}
            >
              {!!product?.previousPrice && (
                <Tag />
              )}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ paddingBottom: ".5rem", fontSize: 18, fontWeight: 500 }}
                >
                  Nombre
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem" }}
                >
                  { product?.title }
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ paddingBottom: ".5rem", fontSize: 18, fontWeight: 500 }}
                >
                  Descripción
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem" }}
                >
                  { product?.description }
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "2.25rem"
                }}
              >
                {!!product?.previousPrice && (
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.5rem",
                      color: "text.subdued",
                      textDecorationLine: "line-through",
                    }}
                  >
                    S/. { product?.previousPrice }
                  </Typography>
                )}
                
                <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
                  S/. { product?.price }
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Button
            color="primary"
            variant="contained"
            sx={{
              width: "100%",
              padding: "1rem",
            }}
            onClick={_handleAddProduct}
          >
            Agregar al carrito
          </Button>
        </Box>
      </ModalLayout>
    </Modal>
  );
}
