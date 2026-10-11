import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as SocialModuleThread } from "../../index";

const meta = {
  id: "modules-social-models-thread-singlepage-admin-v2-table",
  title: "Modules/Social/Thread/Singlepage/admin-v2-table",
  component: SocialModuleThread,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof SocialModuleThread>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
