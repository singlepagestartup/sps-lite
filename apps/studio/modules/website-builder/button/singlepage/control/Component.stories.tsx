import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component } from "./Component";

const meta = {
  id: "modules-website-builder-models-button-singlepage-control",
  title: "Modules/Website-Builder/Button/Singlepage/control",
  component: Component,
  args: { children: "Continue", appearance: "primary" },
} satisfies Meta<typeof Component>;
export const Default: StoryObj<typeof meta> = {};

export default meta;
