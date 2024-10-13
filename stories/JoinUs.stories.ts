import type { Meta, StoryObj } from "@storybook/vue3";
import JoinUs from "../components/Molecules/JoinUs.vue";

const meta = {
  title: "components/JoinUs",
  component: JoinUs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof JoinUs>;

export default meta;
type Story = StoryObj<typeof JoinUs>;

export const Default: Story = {
  args: {},
};
