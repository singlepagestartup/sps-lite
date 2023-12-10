import type { Meta, StoryObj } from "@storybook/react";
import Buttons from "..";
import { entity as button } from "~redux/services/backend/components/elements/button/mock/sps-lite";
const meta = {
  component: Buttons,
} satisfies Meta<typeof Buttons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: { ...button, variant: "secondary" },
};

export const Primary = {
  args: { ...button, variant: "primary" },
};

export const Text = {
  args: { ...button, variant: "text" },
};
