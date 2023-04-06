import { Meta, StoryObj } from "@storybook/react";
import HeaderSections from ".";
import { spsLiteBackendHeaderSectionBlockSimpleCentered } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: HeaderSections } satisfies Meta<
  typeof HeaderSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: spsLiteBackendHeaderSectionBlockSimpleCentered,
};
