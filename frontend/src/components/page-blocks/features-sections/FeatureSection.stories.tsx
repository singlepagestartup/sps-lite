import { Meta, StoryObj } from "@storybook/react";
import { backendFeature } from "~mocks/components";
import FeatureSections from ".";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleThreeColumn: Story = {
  args: {
    title: `Hello world`,
    variant: `simple-three-column`,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    features: Array(4).fill(backendFeature),
  },
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
