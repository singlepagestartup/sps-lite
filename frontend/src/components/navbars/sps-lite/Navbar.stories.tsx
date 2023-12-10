import { Meta, StoryObj } from "@storybook/react";
import Navbars from ".";
import { entity as navbar } from "~redux/services/backend/models/navbar/mock/sps-lite";

const meta = { component: Navbars } satisfies Meta<typeof Navbars>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Boxed: Story = {
  args: { ...navbar, variant: "boxed" },
};
