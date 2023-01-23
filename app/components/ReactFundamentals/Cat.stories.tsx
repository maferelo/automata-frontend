import Cat from "./Cat";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cat",
  component: Cat,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args: object) => <Cat {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  name: "mercurio",
};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, name: "😄👍😍💯" };
