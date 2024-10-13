import type { Meta, StoryObj } from "@storybook/vue3";
import SignUp from "../components/Molecules/SignUp.vue";

const meta = {
  title: "components/SignUp",
  component: SignUp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SignUp>;

export default meta;
type Story = StoryObj<typeof SignUp>;

export const Default: Story = {
  args: {},
};
