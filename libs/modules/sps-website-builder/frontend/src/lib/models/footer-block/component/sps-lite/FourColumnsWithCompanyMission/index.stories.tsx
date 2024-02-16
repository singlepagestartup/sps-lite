import { Meta, StoryObj } from "@storybook/react";
import { entity } from "@sps/sps-website-builder-contracts-extended/lib/models/footer-block/mock/sps-lite";
import Root from ".";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: { ...entity },
};
