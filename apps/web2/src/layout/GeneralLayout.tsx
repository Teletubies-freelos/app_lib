import { Box, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import { useCart } from "../hooks/useCart";
import {
  LabelStepStatus,
  StepStatus,
  WhatsappLogo,
} from "../../../../packages/ui/src";
import PickupStore from "../components/modals/PickupStore/PickupStore";
import BodyPickup from "../components/modals/PickupStore/BodyPickup";
import Cart from "../components/modals/Cart/Cart";
import BodyCart from "../components/modals/Cart/BodyCart";
import CartFloat from "../components/CartFloat";
import Payments from "../components/modals/Payments/Payments";
import MyData from "../components/modals/MyPersonalnfo/MyData";
import ConfirmedOrder from "../components/modals/ConfirmedOrder/ConfirmedOrder";
import FooterModal from "../components/modals/common/FooterModal";
import InfoPayment from "../components/modals/common/InfoPayment";

interface GeneralLayoutProps {
  navBar: JSX.Element;
}

export function GeneralLayout({
  children,
  navBar,
}: PropsWithChildren<GeneralLayoutProps>) {
  const { openCartFloat, changeFloatCart } = useCart();
  return (
    <Box
      sx={{
        padding: "1rem 0",
        height: "100vh",
      }}
    >
      {navBar}
      {children}
      <Box
        display="flex"
        justifyContent="end"
        sx={{
          width: "100%",
          position: "fixed",
          bottom: "1.5rem",
          paddingRight: "1rem",
        }}
      >
        <WhatsappLogo sx={{ cursor: "pointer" }} />
      </Box>
      <CartFloat
        openCartFloat={openCartFloat}
        changeFloatCart={changeFloatCart}
      />
      <Payments
        openCartFloat={openCartFloat}
        changeFloatCart={changeFloatCart}
      />
      <MyData openCartFloat={openCartFloat} changeFloatCart={changeFloatCart} />
      <ConfirmedOrder
        openCartFloat={openCartFloat}
        changeFloatCart={changeFloatCart}
        stepStatus={
          <StepStatus
            steps={["En tienda", "Entregado"]}
            sx={{ width: "13rem", marginTop: "1.5rem" }}
          />
        }
        footer={
          <FooterModal
            infoMessage="Guarda tu número de pedido y realiza el seguimiento en nuestra página principal"
            nameButton="Hacer otro pedido"
            sx={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          />
        }
        priceDelivery={
          <LabelStepStatus
            property="Costo de delivery"
            value="S/ 20.00"
            sx={{
              fontSize: "1rem !important",
              marginTop: "1.5rem",
            }}
          />
        }
        infoPayment={
          <InfoPayment
            titleInfo="Números de cuenta"
            content={
              <>
                <Typography>
                  Banco BBVA Continental - calixto prueba uno
                </Typography>
                <Typography>Número de cuenta: 0238348483939292</Typography>
                <Typography>CCI interbancario: 9483287829229292929</Typography>
              </>
            }
          />
        }
      />
      <Cart
        openCartFloat={openCartFloat}
        onClose={changeFloatCart}
        content={<BodyCart total="S/ 480.00" />}
      />
      <PickupStore
        openCartFloat={openCartFloat}
        changeFloatCart={changeFloatCart}
        content={<BodyPickup total="S/ 480.00" />}
      />
    </Box>
  );
}
