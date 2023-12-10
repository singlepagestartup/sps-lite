import { Meta, StoryObj } from "@storybook/react";
import Alerts from ".";
import { entity as alertBlock } from "~redux/services/backend/components/page-blocks/alert-block/mock/sps-lite";

const meta = { component: Alerts } satisfies Meta<typeof Alerts>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: { ...alertBlock, variant: "centered" },
};
