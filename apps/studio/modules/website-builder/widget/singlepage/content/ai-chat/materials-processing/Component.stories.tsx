import { Component as WebsiteBuilderModuleWidget } from "../../../../index";
import type { Meta, StoryObj } from "@storybook/react";
function Example({ open = false }: { open?: boolean }) {
  return (
    <WebsiteBuilderModuleWidget
      variant="content-ai-chat-materials-processing"
      id="materials-processing"
      open={open}
    />
  );
}
const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-ai-chat-materials-processing",
  title:
    "Modules/Website-Builder/Widget/Singlepage/content/ai-chat/materials-processing",
  component: Example,
  args: { open: false },
  argTypes: { open: { control: "boolean" } },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
