import type { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity as button } from "~redux/services/backend/components/elements/button/mock/sps-lite";
const meta = {
  component: Root,
} satisfies Meta<typeof Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: { ...button, variant: "secondary" },
};
