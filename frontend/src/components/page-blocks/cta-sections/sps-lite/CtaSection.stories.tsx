import { Meta, StoryObj } from "@storybook/react";
import CtaSections from ".";
import { entity as ctaSectionBlock } from "~redux/services/backend/components/page-blocks/cta-section-block/mock/sps-lite";

const meta = { component: CtaSections } satisfies Meta<typeof CtaSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DarkPanelWithAppScreenshot: Story = {
  args: { ...ctaSectionBlock, variant: "dark-with-image" },
};
