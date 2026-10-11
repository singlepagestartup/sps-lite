import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";
const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-ai-chat-hero",
  title: "Modules/Website-Builder/Widget/Singlepage/content/ai-chat/hero",
  component: Component,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Component>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
