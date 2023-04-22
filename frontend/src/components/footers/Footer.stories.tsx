import { Meta, StoryObj } from "@storybook/react";
import Footers from ".";
import { Boxed as SpsLiteBoxed } from "./sps-lite/Footer.stories";

const meta = { component: Footers } satisfies Meta<typeof Footers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Boxed = SpsLiteBoxed;
