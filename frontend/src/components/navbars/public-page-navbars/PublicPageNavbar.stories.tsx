import { Meta, StoryObj } from "@storybook/react";
import { backendPublicPageNavbarSimpleLinksOnLeft } from "~mocks/models";
import PublicPageNavbars from ".";

const meta = { component: PublicPageNavbars } satisfies Meta<
  typeof PublicPageNavbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleLinksOnLeft: Story = {
  args: backendPublicPageNavbarSimpleLinksOnLeft,
};
