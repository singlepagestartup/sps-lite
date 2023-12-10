import { Meta, StoryObj } from "@storybook/react";
import LogotypesClouds from ".";
import { entity } from "~redux/services/backend/components/page-blocks/logotypes-cloud-block/mock/sps-lite";

const meta = { component: LogotypesClouds } satisfies Meta<
  typeof LogotypesClouds
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleWithHeading: Story = {
  args: { ...entity, variant: "simple-with-heading" },
};
