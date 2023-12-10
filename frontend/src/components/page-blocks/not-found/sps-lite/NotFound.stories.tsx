import { Meta, StoryObj } from "@storybook/react";
import NotFound from ".";
import { entity } from "~redux/services/backend/components/page-blocks/not-found-block/mock/sps-lite";

const meta = { component: NotFound } satisfies Meta<typeof NotFound>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: { ...entity, variant: "simple" },
};
