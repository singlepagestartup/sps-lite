import { Meta, StoryObj } from "@storybook/react";
import { backendNavbarSimpleLinksOnLeft } from "~mocks/models";
import Navbars from ".";

const meta = { component: Navbars } satisfies Meta<typeof Navbars>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleLinksOnLeft: Story = {
  args: backendNavbarSimpleLinksOnLeft,
};
