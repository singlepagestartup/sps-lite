import { Meta, StoryObj } from "@storybook/react";
import Incentives from ".";
import { FourColumnWithIllustrations as SpsLiteFourColumnWithIllustrations } from "./sps-lite/Footer.stories";

const meta = { component: Incentives } satisfies Meta<typeof Incentives>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnWithIllustrations = SpsLiteFourColumnWithIllustrations;
