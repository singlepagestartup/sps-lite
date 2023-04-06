import { Meta, StoryObj } from "@storybook/react";
import CtaSections from ".";
import { spsLiteBackendCtaSectionBlockDarkPanelWithAppScreenshot } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: CtaSections } satisfies Meta<typeof CtaSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DarkPanelWithAppScreenshot: Story = {
  args: spsLiteBackendCtaSectionBlockDarkPanelWithAppScreenshot,
};
