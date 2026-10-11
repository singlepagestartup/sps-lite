import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as AnalyticModuleWidget } from "../../index";

const meta = {
  id: "modules-analytic-models-widget-singlepage-admin-v2-table",
  title: "Modules/Analytic/Widget/Singlepage/admin-v2-table",
  component: AnalyticModuleWidget,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof AnalyticModuleWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
