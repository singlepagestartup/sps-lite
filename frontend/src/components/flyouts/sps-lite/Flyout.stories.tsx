import type { Meta, StoryObj } from "@storybook/react";
import Flyout from ".";
import { entity as flyout } from "~redux/services/backend/api/flyout/mock/sps-lite";

const meta = {
  component: Flyout,
} satisfies Meta<typeof Flyout>;

export default meta;

type Story = StoryObj<typeof meta>;

function RenderButton() {
  return (
    <button className="py-4 px-6">
      <p>Button</p>
    </button>
  );
}

export const Simple: Story = {
  args: { ...flyout, children: <RenderButton /> },
};
