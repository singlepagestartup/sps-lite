import { Meta, StoryObj } from "@storybook/react";
import LogotypesClouds from ".";
import { SimpleWithHeading as SpsLiteSimpleWithHeading } from "./sps-lite/LogotypesCloud.stories";

const meta = { component: LogotypesClouds } satisfies Meta<
  typeof LogotypesClouds
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleWithHeading = SpsLiteSimpleWithHeading;
