import { Meta, StoryObj } from "@storybook/react";
import ContactSectons from ".";
import { spsLiteBackendContactSectionBlockCentered } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: ContactSectons } satisfies Meta<
  typeof ContactSectons
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: spsLiteBackendContactSectionBlockCentered,
};
