import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  backgroundColor: "red",
  size: "md",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  backgroundColor: "pink",
  size: "md",
  variant: "secondary",
};

export const BigButton = Template.bind({});
BigButton.args = {
  label: "BigButton",
  backgroundColor: "white",
  size: "lg",
  variant: "secondary",
};
