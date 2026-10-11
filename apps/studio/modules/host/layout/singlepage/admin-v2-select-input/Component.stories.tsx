import type { Meta, StoryObj } from "@storybook/react";
import { HostLayoutAdminV2SelectInput } from "./Component";
const meta = {
  id: "modules-host-models-layout-singlepage-admin-v2-select-input",
  title: "Modules/Host/Layout/Singlepage/admin-v2-select-input",
  component: HostLayoutAdminV2SelectInput,
  parameters: { layout: "padded" },
} satisfies Meta<typeof HostLayoutAdminV2SelectInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
