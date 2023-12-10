import { Meta, StoryObj } from "@storybook/react";
import SlideOvers from ".";
import { entity } from "~redux/services/backend/api/slide-over/mock/sps-lite";

const meta = { component: SlideOvers } satisfies Meta<typeof SlideOvers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const RightSideHalfWidth: Story = {
  args: {
    ...entity,
    variant: "right-side-half-width",
    isOpen: true,
  },
};
