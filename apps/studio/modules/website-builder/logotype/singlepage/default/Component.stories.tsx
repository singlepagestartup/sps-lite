import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./Component";
const meta = {
  id: "modules-website-builder-models-logotype-singlepage-default",
  title: "Modules/Website-Builder/Logotype/Singlepage/default",
  component: Component,
  parameters: { layout: "fullscreen" },
  args: { compact: false },
  argTypes: { compact: { control: "boolean" } },
} satisfies Meta<typeof Component>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
