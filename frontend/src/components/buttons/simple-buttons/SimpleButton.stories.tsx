import type { Meta, StoryObj } from "@storybook/react";
import SimpleButtons, { IButton } from ".";

const meta = { component: SimpleButtons } satisfies Meta<typeof SimpleButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const baseProps = {
  title: `Button`,
  url: `https://nextjs.com`,
};

export const Default: Story = {
  args: {
    ...baseProps,
    variant: `default`,
  },
};

export const Primary = {
  args: {
    ...baseProps,
    variant: `primary`,
  },
};

export const BottomLine = {
  args: {
    ...baseProps,
    variant: `bottom-line`,
  },
};
