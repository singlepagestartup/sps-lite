import { Meta, StoryObj } from "@storybook/react";
import HeaderSections from ".";

const meta = { component: HeaderSections } satisfies Meta<
  typeof HeaderSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: {
    variant: `simple-centered`,
    title: `Используемые коцепции`,
    description: `Концепции, используемые в SPS позволяют постепенно дорабатывать проект при этом давая возможность пользователям получить ваш продукт сразу же. Не нужно разрабатывать проект месяцами, просто начните с одной страницы и добавляйте функционал по мере необходимости. А когда поймете что уперлись в потолок, доработайте функционал под ваши нужды, SPS не ограничивает вас ничем, вы просто пишите JS код на бекенде (Stapi) и фронтенде (Next.js + Tailwind CSS). Не нужно учить новый язык, шаблонизатор или пытаться добавить функционал в закрытую систему.`,
  },
};

export const BrandedWithBackgroundImage: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `branded-with-background-image`,
  },
};
export const SimpleWithSelectMenu: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `simple-with-select-menu`,
  },
};
export const SimpleWithSelectMenuDark: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `simple-with-select-menu-dark`,
  },
};
export const WithBackgroundImageAndOverlappingCards: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `with-background-image-and-overlapping-cards`,
  },
};
