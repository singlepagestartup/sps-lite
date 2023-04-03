import { Meta, StoryObj } from "@storybook/react";
import PublicPageNavbars from ".";
import { backendPublicPageNavbarSimpleLinksOnLeft } from "~mocks/single-types";

const meta = { component: PublicPageNavbars } satisfies Meta<
  typeof PublicPageNavbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleLinksOnLeft: Story = {
  args: backendPublicPageNavbarSimpleLinksOnLeft,
};
