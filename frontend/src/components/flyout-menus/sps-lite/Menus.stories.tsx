import { Meta, StoryObj } from "@storybook/react";
import Menus from ".";
import { spsLiteBackendMenuSimple } from "~mocks/collection-types/sps-lite";

const meta = { component: Menus } satisfies Meta<typeof Menus>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: spsLiteBackendMenuSimple,
};
