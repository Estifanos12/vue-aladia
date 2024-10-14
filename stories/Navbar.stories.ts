import type { Meta, StoryObj } from "@storybook/vue3";
import Navbar from "../components/Molecules/Navbar.vue";

const meta = {
  title: "components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
