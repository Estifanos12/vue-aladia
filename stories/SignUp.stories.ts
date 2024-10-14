import type { Meta, StoryObj } from "@storybook/vue3";
import SignUp from "../components/Organism/SignUp.vue";

import {
  Default as DefaultInput,
  Password as PasswordInput,
} from "./Input.stories";
import { Primary as PrimaryButton } from "./Button.stories";

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
  args: {
    Input: DefaultInput.args,
    Password: PasswordInput.args,
    Button: PrimaryButton.args,
  },
};
