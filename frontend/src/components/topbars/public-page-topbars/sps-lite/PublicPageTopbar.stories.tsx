import { Meta, StoryObj } from "@storybook/react";
import PublicPageTopbars from "..";
import { backendPublicPageTopbarSimple } from "~mocks/single-types";

const meta = { component: PublicPageTopbars } satisfies Meta<
  typeof PublicPageTopbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: backendPublicPageTopbarSimple,
};
