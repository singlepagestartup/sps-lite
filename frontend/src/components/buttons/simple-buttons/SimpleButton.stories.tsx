import type { Meta, StoryObj } from "@storybook/react";
import SimpleButtons from ".";

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
    title: `Button`,
    url: `https://nextjs.com`,
    variant: `primary`,
  },
};

export const BottomLine = {
  args: {
    title: `Button`,
    url: `https://nextjs.com`,
    variant: `bottom-line`,
  },
};
