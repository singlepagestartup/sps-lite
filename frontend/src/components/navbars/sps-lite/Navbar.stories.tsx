import { Meta, StoryObj } from "@storybook/react";
import Navbars from ".";
import { spsLiteBackendNavbarSimple } from "~mocks/collection-types/sps-lite";

const meta = { component: Navbars } satisfies Meta<typeof Navbars>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: spsLiteBackendNavbarSimple,
};
