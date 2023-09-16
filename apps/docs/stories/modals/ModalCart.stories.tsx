import BodyCart from "../../../web2/src/components/modals/Cart/BodyCart";
import Cart from "../../../web2/src/components/modals/Cart/Cart";

export default {
  title: "Modals/Cart",
  component: Cart,
};

const Template = (args) => (
  <Cart {...args} content={<BodyCart />} />
);

export const Default = Template.bind({});
Default.args = {
  openCartFloat: false,
  changeFloatCart: () => {},
};
