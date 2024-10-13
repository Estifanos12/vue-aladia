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
        options: ["primary", "golden", "social"],
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
    hasBgGradient: {
      control: {
        type: "boolean",
      },
    },
    imgSrc: {
      control: {
        type: "text",
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

export const Social: Story = {
  args: {
    variant: "social",
    label: "Continue with Google",
    imgSrc:
      "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.4284%2020.9199H43.7503V20.8334H25.0003V29.1667H36.7743C35.0566%2034.0178%2030.441%2037.5001%2025.0003%2037.5001C18.0972%2037.5001%2012.5003%2031.9032%2012.5003%2025.0001C12.5003%2018.097%2018.0972%2012.5001%2025.0003%2012.5001C28.1868%2012.5001%2031.0857%2013.7022%2033.293%2015.6657L39.1857%209.773C35.4649%206.30529%2030.4878%204.16675%2025.0003%204.16675C13.4951%204.16675%204.16699%2013.4949%204.16699%2025.0001C4.16699%2036.5053%2013.4951%2045.8334%2025.0003%2045.8334C36.5055%2045.8334%2045.8337%2036.5053%2045.8337%2025.0001C45.8337%2023.6032%2045.6899%2022.2397%2045.4284%2020.9199Z'%20fill='%23FFC107'/%3e%3cpath%20d='M6.56836%2015.3032L13.4132%2020.323C15.2652%2015.7376%2019.7507%2012.5001%2024.9996%2012.5001C28.1861%2012.5001%2031.085%2013.7022%2033.2923%2015.6657L39.185%209.773C35.4642%206.30529%2030.4871%204.16675%2024.9996%204.16675C16.9975%204.16675%2010.0579%208.68446%206.56836%2015.3032Z'%20fill='%23FF3D00'/%3e%3cpath%20d='M25%2045.8333C30.3812%2045.8333%2035.2708%2043.7739%2038.9677%2040.425L32.5198%2034.9687C30.4281%2036.5531%2027.8281%2037.5%2025%2037.5C19.5812%2037.5%2014.9802%2034.0448%2013.2469%2029.2229L6.45312%2034.4573C9.90104%2041.2041%2016.9031%2045.8333%2025%2045.8333Z'%20fill='%234CAF50'/%3e%3cpath%20d='M45.4281%2020.9197H43.75V20.8333H25V29.1666H36.774C35.949%2031.4968%2034.45%2033.5062%2032.5167%2034.9697C32.5177%2034.9687%2032.5187%2034.9687%2032.5198%2034.9676L38.9677%2040.4239C38.5115%2040.8385%2045.8333%2035.4166%2045.8333%2024.9999C45.8333%2023.603%2045.6896%2022.2395%2045.4281%2020.9197Z'%20fill='%231976D2'/%3e%3c/svg%3e",
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

export const WithBgGradient: Story = {
  args: {
    variant: "primary",
    label: "With Bg Gradient",
    hasBgGradient: true,
  },
};
