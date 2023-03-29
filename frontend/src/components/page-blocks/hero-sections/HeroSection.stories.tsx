import { Meta, StoryObj } from "@storybook/react";
import { backendButtonDefault } from "~mocks/components";
import HeroSections from ".";

const meta = { component: HeroSections } satisfies Meta<typeof HeroSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: {
    variant: `simple-centered`,
    title: `OpenSource "под капотом"`,
    description: `Используем OpenSource инструменты под капотом, это имеет ряд преимуществ, таких как быстрая фиксация багов в ядре, лучший уровень безопасности.`,
    buttons: [backendButtonDefault],
  },
};

export const WithAppScreenshot: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `with-app-screenshot`,
  },
};

export const Split: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `split`,
  },
};

export const SplitWithScreenshotOnDark: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `split-with-screenshot-on-dark`,
  },
};

export const WithAngledImageOnRight: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `with-angled-image-on-right`,
  },
};
