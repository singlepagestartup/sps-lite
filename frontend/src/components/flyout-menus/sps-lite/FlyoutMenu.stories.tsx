import type { Meta, StoryObj } from "@storybook/react";
import FlyoutMenu from ".";
import { spsLiteBackendFlyoutMenuSimple } from "~mocks/collection-types/sps-lite";

const meta = {
  component: FlyoutMenu,
} satisfies Meta<typeof FlyoutMenu>;

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
  args: { ...spsLiteBackendFlyoutMenuSimple, children: <RenderButton /> },
};
