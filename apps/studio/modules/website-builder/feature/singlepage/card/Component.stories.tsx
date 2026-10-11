import type { Meta, StoryObj } from "@storybook/react";

import { FeatureCard, defaultFeatureCardProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-feature-singlepage-card",
  title: "Modules/Website-Builder/Feature/Singlepage/card",
  component: FeatureCard,
  parameters: { layout: "centered" },
  args: defaultFeatureCardProps,
} satisfies Meta<typeof FeatureCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
