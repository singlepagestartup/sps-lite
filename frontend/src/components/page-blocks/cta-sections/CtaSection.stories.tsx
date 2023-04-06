import { Meta, StoryObj } from "@storybook/react";
import CtaSections from ".";
import { DarkPanelWithAppScreenshot as SpsLiteDarkPanelWithAppScreenshot } from "./sps-lite/CtaSection.stories";

const meta = { component: CtaSections } satisfies Meta<typeof CtaSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DarkPanelWithAppScreenshot = SpsLiteDarkPanelWithAppScreenshot;
