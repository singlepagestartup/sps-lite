import { Meta, StoryObj } from "@storybook/react";
import { entity } from "@sps/sps-website-builder-frontend/lib/redux/components/page-blocks/footer-block/mock/sps-lite";
import Root from ".";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: { ...entity },
};
