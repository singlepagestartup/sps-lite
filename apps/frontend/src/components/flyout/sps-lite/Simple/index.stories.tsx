import type { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity as flyout } from "~redux/services/backend/extensions/sps-website-builder/api/flyout/mock/sps-lite";

const meta = {
  component: Root,
} satisfies Meta<typeof Root>;

export default meta;

type Story = StoryObj<typeof meta>;

function RenderButton() {
  return (
    <button className="py-4 px-6">
      <p>Button</p>
    </button>
  );
}

export const Index: Story = {
  args: { ...flyout, children: <RenderButton /> },
};
