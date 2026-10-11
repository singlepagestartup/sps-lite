import type { Meta, StoryObj } from "@storybook/react";
import { HostMetadataDefault } from "./Component";
const meta = {
  id: "modules-host-models-metadata-singlepage-default",
  title: "Modules/Host/Metadata/Singlepage/default",
  component: HostMetadataDefault,
  parameters: { layout: "padded" },
} satisfies Meta<typeof HostMetadataDefault>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
