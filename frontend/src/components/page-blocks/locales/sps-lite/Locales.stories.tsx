import { Meta, StoryObj } from "@storybook/react";
import Locales from ".";
import { spsLiteBackendLocalesBlockSimple } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: Locales } satisfies Meta<typeof Locales>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: spsLiteBackendLocalesBlockSimple,
};
