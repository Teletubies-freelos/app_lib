import { LabelStepStatus, StepStatus } from "../../../../packages/ui/src";
import ConfirmedOrder from "../../../web2/src/components/modals/ConfirmedOrder/ConfirmedOrder";
import FooterModal from "../../../web2/src/components/modals/common/FooterModal";
import InfoPayment from "../../../web2/src/components/modals/common/InfoPayment";
import { Typography } from "@mui/material";

export default {
  title: "Modals/ConfirmedOrder",
  component: ConfirmedOrder,
};

const Template = (args) => (
  <ConfirmedOrder
    {...args}
    stepStatus={<StepStatus steps={["En tienda", "Entregado"]} />}
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
            <Typography>Banco BBVA Continental - calixto prueba uno</Typography>
            <Typography>Número de cuenta: 0238348483939292</Typography>
            <Typography>CCI interbancario: 9483287829229292929</Typography>
          </>
        }
      />
    }
  />
);

export const Default = Template.bind({});
Default.args = {
  openCartFloat: false,
  changeFloatCart: () => {},
};
