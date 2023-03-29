import type { Meta, StoryObj } from "@storybook/react";
import { backendSlider } from "~mocks/components";
import Slider from ".";

const meta = {
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FadeWithPreviews: Story = {
  args: backendSlider,
};
