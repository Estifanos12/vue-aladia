import type { Meta, StoryObj } from "@storybook/vue3";
import Hero from "../components/Molecules/Hero.vue"; // Adjust path accordingly

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
};
