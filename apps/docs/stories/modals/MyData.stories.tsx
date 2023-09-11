import MyData from "../../../web2/src/components/modals/MyPersonalnfo/MyData";

export default {
  title: "Modals/MyData",
  component: MyData,
};

const Template = (args) => <MyData {...args} />;

export const Default = Template.bind({});
Default.args = {
  openCartFloat: false,
  changeFloatCart: () => {},
};
