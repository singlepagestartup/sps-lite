import { Meta, StoryObj } from "@storybook/react";
import Slider from ".";
import { spsLiteBackendSliderBlockSimple } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: Slider } satisfies Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: spsLiteBackendSliderBlockSimple,
};
