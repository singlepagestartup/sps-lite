import { Meta, StoryObj } from "@storybook/react";
import FeatureSections from ".";
import { WithIcon as SpsLiteWithIcon } from "./sps-lite/FeatureSection.stories";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithIcon = SpsLiteWithIcon;
