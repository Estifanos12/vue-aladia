import type { Meta, StoryObj } from "@storybook/vue3";
import Navbar from "../components/Molecules/Navbar.vue";

import { Primary as PrimaryButton } from "./Button.stories";
import { Default as DefaultInput } from "./Input.stories";

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
  args: {
    Button: PrimaryButton.args,
    Input: DefaultInput.args,
  },
};
