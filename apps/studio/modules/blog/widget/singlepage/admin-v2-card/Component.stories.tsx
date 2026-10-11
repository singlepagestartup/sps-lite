import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as BlogModuleWidget } from "../../index";

import fixture from "../admin-v2-table/data.json";

const meta = {
  id: "modules-blog-models-widget-singlepage-admin-v2-card",
  title: "Modules/Blog/Widget/Singlepage/admin-v2-card",
  component: BlogModuleWidget,
  args: { variant: "admin-v2-card", id: fixture.records[0].id },
  argTypes: { id: { control: "text" } },
} satisfies Meta<typeof BlogModuleWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
