import { Meta, StoryObj } from "@storybook/react";
import PublicPageNavbars from ".";
import { spsLiteBackendPublicPageNavbarSimpleLinksOnLeft } from "~mocks/single-types/sps-lite";

const meta = { component: PublicPageNavbars } satisfies Meta<
  typeof PublicPageNavbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleLinksOnLeft: Story = {
  args: spsLiteBackendPublicPageNavbarSimpleLinksOnLeft,
};
