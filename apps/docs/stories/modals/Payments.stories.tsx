import Payments from "../../../web2/src/components/modals/Payments/Payments";
import BodyPayments from "../../../web2/src/components/modals/Payments/BodyPayments";

export default {
  title: "Modals/Payments",
  component: Payments,
};

const Template = (args) => <Payments {...args} content={<BodyPayments />} />;

export const Default = Template.bind({});
Default.args = {
  openCartFloat: false,
  changeFloatCart: () => {},
};
