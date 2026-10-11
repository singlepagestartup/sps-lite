import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";
const meta = {
  id: "modules-website-builder-models-button-singlepage-navigation",
  title: "Modules/Website-Builder/Button/Singlepage/navigation",
  component: Component,
  parameters: { layout: "fullscreen" },
  args: { label: "Home", href: "/", selected: false, disabled: false },
  argTypes: {
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Component>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
