import type { Meta, StoryObj } from "@storybook/react";

import {
  FeatureStatusDefault,
  defaultFeatureStatusDefaultProps,
} from "./Component";

const meta = {
  id: "modules-website-builder-models-feature-singlepage-status-default",
  title: "Modules/Website-Builder/Feature/Singlepage/status-default",
  component: FeatureStatusDefault,
  parameters: { layout: "centered" },
  args: defaultFeatureStatusDefaultProps,
} satisfies Meta<typeof FeatureStatusDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
