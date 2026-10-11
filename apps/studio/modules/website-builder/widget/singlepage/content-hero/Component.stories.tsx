import type { Meta, StoryObj } from "@storybook/react";

import { ContentHero, defaultContentHeroProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-hero",
  title: "Modules/Website-Builder/Widget/Singlepage/content-hero",
  component: ContentHero,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultContentHeroProps,
} satisfies Meta<typeof ContentHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
