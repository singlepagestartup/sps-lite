import { Meta, StoryObj } from "@storybook/react";
import Alerts from ".";
import { spsLiteBackendAlertBlockSimple } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: Alerts } satisfies Meta<typeof Alerts>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: spsLiteBackendAlertBlockSimple,
};
