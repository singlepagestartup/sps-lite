import { Meta, StoryObj } from "@storybook/react";
import PublicPageNavbars from ".";
import { SimpleLinksOnLeft as SpsLiteSimpleLinksOnLeft } from "./sps-lite/Navbar.stories";

const meta = { component: PublicPageNavbars } satisfies Meta<
  typeof PublicPageNavbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleLinksOnLeft = SpsLiteSimpleLinksOnLeft;
