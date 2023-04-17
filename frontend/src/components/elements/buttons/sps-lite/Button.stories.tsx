import type { Meta, StoryObj } from "@storybook/react";
import {
  spsLiteBackendButtonBottomLine,
  spsLiteBackendButtonPrimary,
  spsLiteBackendButtonSecondary,
} from "~mocks/components/elements/sps-lite";
import Buttons from "..";

const meta = {
  component: Buttons,
} satisfies Meta<typeof Buttons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: spsLiteBackendButtonSecondary,
};

export const Primary = {
  args: spsLiteBackendButtonPrimary,
};

export const BottomLine = {
  args: spsLiteBackendButtonBottomLine,
};
