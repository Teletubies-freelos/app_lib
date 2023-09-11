import BodyPickup from "../../../web2/src/components/modals/PickupStore/BodyPickup";
import PickupStore from "../../../web2/src/components/modals/PickupStore/PickupStore";

export default {
  title: "Modals/ModalPickup",
  component: PickupStore,
};

const Template = (args) => (
  <PickupStore {...args} content={<BodyPickup total="S/ 480.00" />} />
);

export const Default = Template.bind({});
Default.args = {
  openCartFloat: false,
  changeFloatCart: () => {},
};
