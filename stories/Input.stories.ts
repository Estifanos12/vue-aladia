import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "../components/Atomic/Input.vue";

const meta = {
  title: "Atomic/Input",
  component: Input,
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
    type: {
      control: {
        type: "select",
        options: ["text", "password"],
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
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
    errorMsg: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Type here",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};

export const WithIcon: Story = {
  args: {
    type: "text",
    placeholder: "Type here",
    iconClass: "fas fa-user",
  },
};

export const WithError: Story = {
  args: {
    type: "text",
    placeholder: "Type here",
    hasError: true,
    errorMsg: "This field is required",
  },
};

export const WithClassName: Story = {
  args: {
    type: "text",
    placeholder: "Type here",
    className: "border border-2 border-black h-10",
  },
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
};

export const WithIconAndError: Story = {
  args: {
    type: "text",
    placeholder: "Type here",
    iconClass: "fas fa-user",
    hasError: true,
    errorMsg: "This field is required",
  },
};

export const WithIconAndClassName: Story = {
  args: {
    type: "text",
    placeholder: "Type here",
    iconClass: "fas fa-user",
    className: "border border-2 border-black h-10",
  },
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
};
