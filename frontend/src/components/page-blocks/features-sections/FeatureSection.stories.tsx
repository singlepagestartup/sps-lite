import { Meta, StoryObj } from "@storybook/react";
import { backendFeatureSectionBlock } from "~mocks/components";
import FeatureSections from ".";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleThreeColumn: Story = {
  args: backendFeatureSectionBlock,
};

export const ThreeColumnWithSlider: Story = {
  args: {
    ...SimpleThreeColumn.args,
    variant: `three-column-with-slider`,
  },
};
export const WithProductScreenshotOnLeft: Story = {
  args: {
    ...SimpleThreeColumn.args,
    variant: `with-product-screenshot-on-left`,
  },
};
