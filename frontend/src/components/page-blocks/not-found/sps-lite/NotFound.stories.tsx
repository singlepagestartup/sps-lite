import { Meta, StoryObj } from "@storybook/react";
import NotFound from ".";
import { spsLiteBackendNotFoundBlockSimple } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: NotFound } satisfies Meta<typeof NotFound>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: spsLiteBackendNotFoundBlockSimple,
};
