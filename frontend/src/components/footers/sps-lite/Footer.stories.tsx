import { Meta, StoryObj } from "@storybook/react";
import Footers from "..";
import { spsLiteBackendFooterBoxed } from "~mocks/collection-types/sps-lite";

const meta = { component: Footers } satisfies Meta<typeof Footers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Boxed: Story = {
  args: spsLiteBackendFooterBoxed,
};
