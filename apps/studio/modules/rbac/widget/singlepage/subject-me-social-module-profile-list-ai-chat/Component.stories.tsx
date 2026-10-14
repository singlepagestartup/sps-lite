import { Component } from "./Component";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title:
    "Modules/RBAC/Widget/Singlepage/subject-me-social-module-profile-list-ai-chat",
  component: Component,
  parameters: { layout: "fullscreen" },
  args: {
    projects: [
      {
        id: "pottery",
        name: "Pottery workshops",
        href: "/ai-chat/social/profiles/pottery",
      },
      {
        id: "coffee",
        name: "Coffee shop",
        href: "/ai-chat/social/profiles/coffee",
      },
    ],
  },
} satisfies Meta<typeof Component>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
export const Empty: StoryObj<typeof meta> = { args: { projects: [] } };
export const Loading: StoryObj<typeof meta> = { args: { pending: true } };
export const Error: StoryObj<typeof meta> = { args: { error: true } };
