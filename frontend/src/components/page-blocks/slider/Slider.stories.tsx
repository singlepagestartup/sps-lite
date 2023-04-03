import { Meta, StoryObj } from "@storybook/react";
import CtaSections from ".";
import { backendSliderBlockSimple } from "~mocks/page-blocks";

const meta = { component: CtaSections } satisfies Meta<typeof CtaSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: backendSliderBlockSimple,
};
