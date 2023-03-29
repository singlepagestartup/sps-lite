import { Meta, StoryObj } from "@storybook/react";
import { backendTopbarSimple } from "~mocks/models";
import Topbars from ".";

const meta = { component: Topbars } satisfies Meta<typeof Topbars>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: backendTopbarSimple,
};
