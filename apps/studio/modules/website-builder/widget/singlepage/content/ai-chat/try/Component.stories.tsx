import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";
const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-ai-chat-try",
  title: "Modules/Website-Builder/Widget/Singlepage/content/ai-chat/try",
  component: Component,
  parameters: { layout: "fullscreen" },
  args: {
    children: (
      <div className="rounded-2xl border border-border bg-card p-8 text-muted-foreground">
        Chat preview supplied by Host Page
      </div>
    ),
  },
} satisfies Meta<typeof Component>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
