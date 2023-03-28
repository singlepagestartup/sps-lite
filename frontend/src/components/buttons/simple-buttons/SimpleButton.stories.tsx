import type { Meta, StoryObj } from "@storybook/react";
import SimpleButtons, { IButton } from ".";

const meta = {
  component: SimpleButtons,
} satisfies Meta<typeof SimpleButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: `Button`,
    url: `https://nextjs.com`,
    variant: `default`,
  },
};

export const Primary = {
  args: {
    ...Default.args,
    variant: `primary`,
  },
};

export const BottomLine = {
  args: {
    ...Default.args,
    variant: `bottom-line`,
  },
};
