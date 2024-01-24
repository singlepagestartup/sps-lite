import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity as ctaSectionBlock } from "~redux/services/backend/components/page-blocks/cta-section-block/mock/sps-lite";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: { ...ctaSectionBlock },
};

export const Skeleton: Story = {
  args: { ...ctaSectionBlock, showSkeletons: true },
};
