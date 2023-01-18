import { MyButton } from "./MyButton";

export default {
  title: "components/MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed" },
  },
};

export const Basic = (args) => <MyButton {...args} />;

Basic.args = {
  text: "Hello World",
  color: "purple",
};
