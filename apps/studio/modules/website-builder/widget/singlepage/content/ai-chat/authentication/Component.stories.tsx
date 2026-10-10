import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";
import registrationContent from "./registration.json";

const meta = {
  title:
    "Modules/Website-Builder/Models/Widget/Singlepage/content/ai-chat/authentication",
  component: Component,
  parameters: { layout: "fullscreen" },
  args: {
    children: (
      <div className="rounded-2xl border border-dashed border-sps-line p-6 text-sm text-sps-muted">
        Subject form slot
      </div>
    ),
    media: "cover",
    asideIcon: "question",
  },
} satisfies Meta<typeof Component>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
export const StackedImages: StoryObj<typeof meta> = {
  args: {
    content: registrationContent,
    media: "stack",
    asideIcon: "shield-check",
  },
};
