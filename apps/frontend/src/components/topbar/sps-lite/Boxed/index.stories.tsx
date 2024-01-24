import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity } from "@sps/sps-website-builder-frontend/lib/redux/entities/topbar/mock/sps-lite";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: { ...entity, showSkeletons: false },
};
