import { Meta, StoryObj } from "@storybook/react";
import { backendLogo } from "~mocks/components";
import LogotypesClouds from ".";

const meta = { component: LogotypesClouds } satisfies Meta<
  typeof LogotypesClouds
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: `Hello world`,
    variant: `simple`,
    logos: Array(5).fill(backendLogo),
  },
};

export const OffWhiteGrid: Story = {
  args: {
    ...Simple.args,
    variant: `off-white-grid`,
  },
};

export const SimpleWithHeading: Story = {
  args: {
    ...Simple.args,
    variant: `simple-with-heading`,
  },
};

export const SimpleWithHeadingOnBrand: Story = {
  args: {
    ...Simple.args,
    variant: `simple-with-heading-on-brang`,
  },
};

export const SplitWithGridOnRight: Story = {
  args: {
    ...Simple.args,
    variant: `split-with-grid-on-right`,
  },
};
