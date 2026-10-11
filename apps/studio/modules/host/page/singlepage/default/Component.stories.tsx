import type { Meta, StoryObj } from "@storybook/react";
import { HostPageDefault } from "./Component";
const meta = {
  id: "modules-host-models-page-singlepage-default",
  title: "Modules/Host/Page/Singlepage/default",
  component: HostPageDefault,
  parameters: { layout: "padded" },
} satisfies Meta<typeof HostPageDefault>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
