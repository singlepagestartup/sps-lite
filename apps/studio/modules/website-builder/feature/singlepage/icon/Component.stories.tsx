import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component } from "./Component";

const meta = {
  title: "Modules/Website-Builder/Models/Feature/Singlepage/icon",
  component: Component,
  args: { name: "robot" },
} satisfies Meta<typeof Component>;
export const Default: StoryObj<typeof meta> = {};

export default meta;
