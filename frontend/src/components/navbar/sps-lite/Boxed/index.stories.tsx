import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity as navbar } from "~redux/services/backend/extensions/sps-website-builder/api/navbar/mock/sps-lite";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: { ...navbar },
};
