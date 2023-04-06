import { Meta, StoryObj } from "@storybook/react";
import PublicPageLayouts from ".";
import { Simple as SpsLiteSimple } from "./sps-lite/PublicPageLayout.stories";

const meta = { component: PublicPageLayouts } satisfies Meta<
  typeof PublicPageLayouts
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple = SpsLiteSimple;
