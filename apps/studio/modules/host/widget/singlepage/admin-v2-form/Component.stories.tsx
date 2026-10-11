import type { Meta, StoryObj } from "@storybook/react";
import { HostWidgetAdminV2Form } from "./Component";
const meta = {
  id: "modules-host-models-widget-singlepage-admin-v2-form",
  title: "Modules/Host/Widget/Singlepage/admin-v2-form",
  component: HostWidgetAdminV2Form,
  parameters: { layout: "padded" },
} satisfies Meta<typeof HostWidgetAdminV2Form>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
