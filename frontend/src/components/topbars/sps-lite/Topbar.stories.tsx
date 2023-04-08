import { Meta, StoryObj } from "@storybook/react";
import PublicPageTopbars from "..";
import { spsLiteBackendTopbarSimple } from "~mocks/collection-types/sps-lite";

const meta = { component: PublicPageTopbars } satisfies Meta<
  typeof PublicPageTopbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: spsLiteBackendTopbarSimple,
};
