import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";
const meta = {
  id: "modules-website-builder-models-widget-singlepage-navbar-ai-chat-landing",
  title: "Modules/Website-Builder/Widget/Singlepage/navbar/ai-chat-landing",
  component: Component,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Component>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
