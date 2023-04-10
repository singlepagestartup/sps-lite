import { Meta, StoryObj } from "@storybook/react";
import PublicPageNavbars from ".";
import { spsLiteBackendNavbarSimple } from "~mocks/collection-types/sps-lite";

const meta = { component: PublicPageNavbars } satisfies Meta<
  typeof PublicPageNavbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: spsLiteBackendNavbarSimple,
};
