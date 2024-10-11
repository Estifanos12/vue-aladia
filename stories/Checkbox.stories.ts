import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "../components/Atomic/Checkbox.vue";

const meta = {
  title: "Atomic/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#0D0D0D",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    handleClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Label",
  },
};
