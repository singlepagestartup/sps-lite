import { Meta, StoryObj } from "@storybook/react";
import { backendButtonDefault } from "~mocks/components";
import NotFound from ".";

const meta = { component: NotFound } satisfies Meta<typeof NotFound>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    variant: `simple`,
    title: `404`,
    subtitle: `Page not found`,
    description: `Come to main page and start again`,
    buttons: Array(1).fill(backendButtonDefault),
  },
};
