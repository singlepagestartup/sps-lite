import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component } from "./Component";

const meta = {
  id: "modules-website-builder-models-feature-singlepage-icon",
  title: "Modules/Website-Builder/Feature/Singlepage/icon",
  component: Component,
  args: { name: "robot" },
} satisfies Meta<typeof Component>;
export const Default: StoryObj<typeof meta> = {};

export default meta;
