import type { Meta, StoryObj } from "@storybook/react";
import Slider from "..";
import { entity } from "~redux/services/backend/api/slider/mock/sps-lite";

const meta = {
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FadeWithPreviews: Story = {
  args: { ...entity, variant: "fade-with-previews" },
};
