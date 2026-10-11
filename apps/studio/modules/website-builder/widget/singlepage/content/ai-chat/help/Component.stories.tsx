import { Component as WebsiteBuilderModuleWidget } from "../../../../index";
import type { Meta, StoryObj } from "@storybook/react";
function Example() {
  return (
    <WebsiteBuilderModuleWidget variant="content-ai-chat-help">
      <div className="rounded-2xl border border-sps-line bg-sps-white p-6 text-sm text-sps-muted">
        Support form slot
      </div>
    </WebsiteBuilderModuleWidget>
  );
}
const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-ai-chat-help",
  title: "Modules/Website-Builder/Widget/Singlepage/content/ai-chat/help",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
