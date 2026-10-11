import type { Meta, StoryObj } from "@storybook/react";
import { HostWidgetAdminV2SelectInput } from "./Component";
const meta = {
  id: "modules-host-models-widget-singlepage-admin-v2-select-input",
  title: "Modules/Host/Widget/Singlepage/admin-v2-select-input",
  component: HostWidgetAdminV2SelectInput,
  parameters: { layout: "padded" },
} satisfies Meta<typeof HostWidgetAdminV2SelectInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
