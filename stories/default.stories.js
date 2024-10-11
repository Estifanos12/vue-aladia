import defaultLayout from "../layouts/default.vue";

export default {
  title: "layouts/default",
  component: defaultLayout,
};

const Template = (args) => {
  return {
    components: { defaultLayout },
    setup() {
      return args;
    },
    template: '<defaultLayout v-bind="args" />',
  };
};

// Create stories for each variant

export const Default = Template.bind({});
Default.args = {
  variant: "default",
};
