import type { Meta, StoryObj } from "@storybook/react";
import Slider from ".";
import { backendSlider } from "~mocks/collection-types/sps-lite";

const meta = {
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FadeWithPreviews: Story = {
  args: backendSlider,
};
