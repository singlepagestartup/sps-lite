import type { Meta, StoryObj } from "@storybook/react";
import { HostPageAdminV2SelectInput } from "./Component";
const meta = {
  id: "modules-host-models-page-singlepage-admin-v2-select-input",
  title: "Modules/Host/Page/Singlepage/admin-v2-select-input",
  component: HostPageAdminV2SelectInput,
  parameters: { layout: "padded" },
} satisfies Meta<typeof HostPageAdminV2SelectInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
