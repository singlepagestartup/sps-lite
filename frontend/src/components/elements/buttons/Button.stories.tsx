import type { Meta, StoryObj } from "@storybook/react";
import {
  Secondary as SpsLiteSecondary,
  Primary as SpsLitePrimary,
  BottomLine as SpsLiteBottomLine,
} from "./sps-lite/Button.stories";
import Buttons from ".";

const meta = {
  component: Buttons,
} satisfies Meta<typeof Buttons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Secondary = SpsLiteSecondary;

export const Primary = SpsLitePrimary;

export const BottomLine = SpsLiteBottomLine;
