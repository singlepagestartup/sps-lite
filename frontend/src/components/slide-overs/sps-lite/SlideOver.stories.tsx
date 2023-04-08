import { Meta, StoryObj } from "@storybook/react";
import SlideOvers from ".";
import { spsLiteBackendSlideOverSimpleRight } from "~mocks/collection-types/sps-lite";

const meta = { component: SlideOvers } satisfies Meta<typeof SlideOvers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    ...spsLiteBackendSlideOverSimpleRight,
    isOpen: true,
  },
};
