import { Meta, StoryObj } from "@storybook/react";
import { backendButtonDefault } from "~mocks/components";
import CtaSections from ".";

const meta = { component: CtaSections } satisfies Meta<typeof CtaSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: {
    title: `Hello world`,
    variant: `simple-centered`,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    buttons: Array(3).fill(backendButtonDefault),
  },
};

export const DarkPanelWithAppScreenshot: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `dark-panel-with-app-screenshot`,
  },
};
