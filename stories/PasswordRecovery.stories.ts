import type { Meta, StoryObj } from "@storybook/vue3";
import PasswordRecovery from "../components/Organism/PasswordRecovery.vue";

import { userStore, resetUserStore } from "~/store/store";
userStore.email.value = "michael12gashaw@gmail.com";

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
  args: {},
};
