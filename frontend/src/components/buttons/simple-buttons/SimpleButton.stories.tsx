import type { Meta, StoryObj } from "@storybook/react";
import SimpleButtons from ".";
import {
  backendButtonBottomLine,
  backendButtonDefault,
  backendButtonPrimary,
} from "~mocks/components/elements/sps-lite";

const meta = {
  component: SimpleButtons,
} satisfies Meta<typeof SimpleButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: backendButtonDefault,
};

export const Primary = {
  args: backendButtonPrimary,
};

export const BottomLine = {
  args: backendButtonBottomLine,
};
