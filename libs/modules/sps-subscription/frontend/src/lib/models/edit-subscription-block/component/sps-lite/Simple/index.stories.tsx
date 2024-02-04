import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { Component as alertBlock } from "../../../../../redux/components/page-blocks/alert-block/mock/sps-lite";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: { ...alertBlock },
};
