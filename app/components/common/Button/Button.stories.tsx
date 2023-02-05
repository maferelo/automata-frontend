import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "primary",
};
