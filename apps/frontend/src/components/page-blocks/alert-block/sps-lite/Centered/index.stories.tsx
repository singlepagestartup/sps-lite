import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity as alertBlock } from "@sps/sps-website-builder-frontend/lib/redux/components/page-blocks/alert-block/mock/sps-lite";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: { ...alertBlock },
};
