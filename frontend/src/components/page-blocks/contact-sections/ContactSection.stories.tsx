import { Meta, StoryObj } from "@storybook/react";
import { backendButtonsArraySimple } from "~mocks/components";

import ContactSectons from ".";

const meta = { component: ContactSectons } satisfies Meta<
  typeof ContactSectons
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SplitBrandPanel: Story = {
  args: {
    title: `Hello world`,
    variant: `split-brand-panel`,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    buttonsArrays: [backendButtonsArraySimple],
  },
};
