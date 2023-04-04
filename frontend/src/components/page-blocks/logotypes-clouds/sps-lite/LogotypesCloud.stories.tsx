import { Meta, StoryObj } from "@storybook/react";
import LogotypesClouds from "..";
import { backendLogotypesCloudBlockSimpleWithHeading } from "~mocks/components/page-blocks";

const meta = { component: LogotypesClouds } satisfies Meta<
  typeof LogotypesClouds
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleWithHeading: Story = {
  args: backendLogotypesCloudBlockSimpleWithHeading,
};
