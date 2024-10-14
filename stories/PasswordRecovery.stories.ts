import type { Meta, StoryObj } from "@storybook/vue3";
import PasswordRecovery from "../components/Organism/PasswordRecovery.vue";

import {
  Default as DefaultInput,
  Password as PasswordInput,
} from "./Input.stories";
import { Primary as PrimaryButton } from "./Button.stories";

const meta = {
  title: "components/PasswordRecovery",
  component: PasswordRecovery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordRecovery>;

export default meta;
type Story = StoryObj<typeof PasswordRecovery>;

export const Default: Story = {
  args: {
    Button: PrimaryButton.args,
  },
};
