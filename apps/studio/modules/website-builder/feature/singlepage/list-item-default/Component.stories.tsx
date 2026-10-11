import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  FeatureListItemDefault,
  defaultFeatureListItemDefaultProps,
} from "./Component";

const meta = {
  id: "modules-website-builder-models-feature-singlepage-list-item-default",
  title: "Modules/Website-Builder/Feature/Singlepage/list-item-default",
  component: FeatureListItemDefault,
  parameters: { layout: "centered" },
  args: defaultFeatureListItemDefaultProps,
} satisfies Meta<typeof FeatureListItemDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
