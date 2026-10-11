import { Component as WebsiteBuilderModuleWidget } from "../../../..";
import type { Meta, StoryObj } from "@storybook/react";
function Example() {
  return (
    <WebsiteBuilderModuleWidget variant="content-ai-chat-profile-create">
      <p className="mt-8 rounded-xl border border-sps-line p-4">
        Subject form slot
      </p>
    </WebsiteBuilderModuleWidget>
  );
}
const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-ai-chat-profile-create",
  title:
    "Modules/Website-Builder/Widget/Singlepage/content/ai-chat/profile-create",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
