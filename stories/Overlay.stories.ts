import type { Meta, StoryObj } from "@storybook/vue3";
import Overlay from "../components/Atomic/Overlay.vue";

interface OverlayProps {
  handleClick: (e: Event) => void;
  slotContent: string;
}

const meta = {
  title: "Atomic/Overlay",
  component: Overlay,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    handleClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  render: (args) => ({
    components: { Overlay },
    setup() {
      return args;
    },
    template: `<Overlay @click="handleClick">
    <div class="h-32 w-32 bg-white text-black p-4 rounded-lg shadow-lg flex justify-center items-center">
      <p>Hello, world!</p>
    </div>
    </Overlay>`,
  }),
  args: {
    handleClick: (e: Event) => {
      console.log("clicked", e);
    },
  },
};
