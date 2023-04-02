import { Meta, StoryObj } from "@storybook/react";
import { backendPublicPageTopbarSimple } from "~mocks/models";
import PublicPageTopbars from ".";

const meta = { component: PublicPageTopbars } satisfies Meta<
  typeof PublicPageTopbars
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: backendPublicPageTopbarSimple,
};
