import { Meta, StoryObj } from "@storybook/react";
import HeaderSections from ".";
import { SimpleCentered as SpsLiteSimpleCentered } from "./sps-lite/Alerts.stories";

const meta = { component: HeaderSections } satisfies Meta<
  typeof HeaderSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered = SpsLiteSimpleCentered;
