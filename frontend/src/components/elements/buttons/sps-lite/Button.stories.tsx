import type { Meta, StoryObj } from "@storybook/react";
import {
  spsLiteBackendButtonText,
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

export const Text = {
  args: spsLiteBackendButtonText,
};
