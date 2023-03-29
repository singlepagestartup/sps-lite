import { Meta, StoryObj } from "@storybook/react";
import { backendSlider } from "~mocks/components";
import CtaSections from ".";

const meta = { component: CtaSections } satisfies Meta<typeof CtaSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: {
    variant: `simple`,
    slider: backendSlider,
  },
};
