import { Meta, StoryObj } from "@storybook/react";
import SlideOvers from ".";
import { spsLiteBackendSlideOverRightSideHalfWidth } from "~mocks/collection-types/sps-lite";

const meta = { component: SlideOvers } satisfies Meta<typeof SlideOvers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const RightSideHalfWidth: Story = {
  args: {
    ...spsLiteBackendSlideOverRightSideHalfWidth,
    isOpen: true,
  },
};
