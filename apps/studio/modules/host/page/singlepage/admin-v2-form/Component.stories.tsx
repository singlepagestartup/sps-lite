import type { Meta, StoryObj } from "@storybook/react";
import { HostPageAdminV2Form } from "./Component";
const meta = {
  id: "modules-host-models-page-singlepage-admin-v2-form",
  title: "Modules/Host/Page/Singlepage/admin-v2-form",
  component: HostPageAdminV2Form,
  parameters: { layout: "padded" },
} satisfies Meta<typeof HostPageAdminV2Form>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
