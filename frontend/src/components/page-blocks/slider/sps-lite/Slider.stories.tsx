import { Meta, StoryObj } from "@storybook/react";
import Slider from ".";
import { entity } from "~redux/services/backend/components/page-blocks/slider-block/mock/sps-lite";

const meta = { component: Slider } satisfies Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: { ...entity, variant: "simple" },
};
