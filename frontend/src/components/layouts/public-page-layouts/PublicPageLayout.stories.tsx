import { Meta, StoryObj } from "@storybook/react";
import PublicPageLayouts from ".";
import { backendPublicPage } from "~mocks/index";

const meta = { component: PublicPageLayouts } satisfies Meta<
  typeof PublicPageLayouts
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: backendPublicPage,
};
