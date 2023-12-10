import { Meta, StoryObj } from "@storybook/react";
import PublicPageTopbars from "..";
import { entity } from "~redux/services/backend/api/topbar/mock/sps-lite";

const meta = { component: PublicPageTopbars } satisfies Meta<
  typeof PublicPageTopbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: { ...entity, showSkeletons: false },
};
