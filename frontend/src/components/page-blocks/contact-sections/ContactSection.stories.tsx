import { Meta, StoryObj } from "@storybook/react";
import ContactSectons from ".";
import { backendContactSectionBlockSplitBrandPanel } from "~mocks/page-blocks";

const meta = { component: ContactSectons } satisfies Meta<
  typeof ContactSectons
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SplitBrandPanel: Story = {
  args: backendContactSectionBlockSplitBrandPanel,
};
