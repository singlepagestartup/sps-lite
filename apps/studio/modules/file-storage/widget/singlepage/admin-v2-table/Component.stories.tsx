import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as FileStorageModuleWidget } from "../../index";

const meta = {
  id: "modules-file-storage-models-widget-singlepage-admin-v2-table",
  title: "Modules/File-Storage/Widget/Singlepage/admin-v2-table",
  component: FileStorageModuleWidget,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof FileStorageModuleWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
