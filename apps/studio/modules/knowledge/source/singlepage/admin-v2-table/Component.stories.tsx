import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as KnowledgeModuleSource } from "../../index";

const meta = {
  id: "modules-knowledge-models-source-singlepage-admin-v2-table",
  title: "Modules/Knowledge/Source/Singlepage/admin-v2-table",
  component: KnowledgeModuleSource,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof KnowledgeModuleSource>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
