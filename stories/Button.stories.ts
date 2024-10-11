import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "../components/Atomic/Button.vue";

const meta = {
  title: "Atomic/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "golden"],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
    iconClass: {
      control: {
        type: "text",
      },
    },
    hasError: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary",
  },
};

// export const Secondary: Story = {
//   args: {
//     variant: "secondary",
//     label: "Secondary",
//   },
// };

export const Golden: Story = {
  args: {
    variant: "golden",
    label: "Golden",
  },
  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#0D0D0D" }],
    },
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    label: "With Icon",
    iconClass: "fa-solid fa-envelope",
  },
};

export const WithError: Story = {
  args: {
    variant: "primary",
    label: "With Error",
    hasError: true,
  },
};
