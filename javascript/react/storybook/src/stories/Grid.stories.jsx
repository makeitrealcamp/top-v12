import Grid from "../components/Grid";

export default {
  title: "Components/Grid",
  label: "Grid",
  component: Grid,
  argTypes: {
    numberOfChildren: {
      type: "number",
      defaultValue: 4,
    },
  },
};

const Template = ({ numberOfChildren, args }) => (
  <Grid {...args}>
    {[...Array(numberOfChildren).keys()].map((number) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {number + 1}
      </div>
    ))}
  </Grid>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  spacing: 10,
  direction: "row",
  wrap: true,
};
