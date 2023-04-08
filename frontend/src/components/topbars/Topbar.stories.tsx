import { Meta, StoryObj } from "@storybook/react";
import PublicPageTopbars from ".";
import { SimpleCentered as SpsLiteSimpleCentered } from "./sps-lite/Topbar.stories";

const meta = { component: PublicPageTopbars } satisfies Meta<
  typeof PublicPageTopbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered = SpsLiteSimpleCentered;
