import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity } from "../../../../../redux/components/page-blocks/features-section-block/mock/sps-lite";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: { ...entity },
};
