import { Meta, StoryObj } from "@storybook/react";
import HeaderSections from ".";
import { entity } from "~redux/services/backend/components/page-blocks/header-section-block/mock/sps-lite";

const meta = { component: HeaderSections } satisfies Meta<
  typeof HeaderSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: { ...entity, variant: "simple-centered" },
};
