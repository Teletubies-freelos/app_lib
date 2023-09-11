import CartFloat from "../../../web2/src/components/CartFloat";

export default {
  title: "Modals/CartFloat",
  component: CartFloat,
};

const Template = (args) => <CartFloat {...args} />;

export const Default = Template.bind({});
Default.args = {
  openCartFloat: false,
  changeFloatCart: () => {},
};
