import type { Meta, StoryObj } from "@storybook/react";
import {
  Default as SpsLiteDefault,
  Primary as SpsLitePrimary,
  BottomLine as SpsLiteBottomLine
} from "./sps-lite/Button.stories";
import Buttons from ".";

const meta = {
  component: Buttons,
} satisfies Meta<typeof Buttons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = SpsLiteDefault

export const Primary = SpsLitePrimary

export const BottomLine = SpsLiteBottomLine
