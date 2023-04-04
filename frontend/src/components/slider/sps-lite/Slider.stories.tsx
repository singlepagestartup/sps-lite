import type { Meta, StoryObj } from "@storybook/react";
import Slider from "..";
import { backendSliderFadeWithPreviews } from "~mocks/collection-types";

const meta = {
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FadeWithPreviews: Story = {
  args: backendSliderFadeWithPreviews,
};
