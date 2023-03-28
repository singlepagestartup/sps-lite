import { Meta, StoryObj } from "@storybook/react";
import Faqs from ".";

const meta = { component: Faqs } satisfies Meta<typeof Faqs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {
  args: {
    title: `Hello world`,
    variant: `three-columns`,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    faqs: [
      {
        title: `Конструктор блоков страниц`,
        description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
      },
      {
        title: `Мультиязычность`,
        description: `Ваш стартап обязательно станет интернациональным, мы позаботились об этом и уже все подготовили за вас. Просто выберите какие языки поддерживать.`,
      },
      {
        title: `Аутентификация и авторизация пользователей с мульти-факторным подтверждением входа`,
        description: `Разработка аутентификаци, авторизации и всех сопутствующих страниц занимает от 20 до 100 часов работы команды. Больше не нужно тратить на это время, все уже есть и работает. Просто воспользуйтесь наработками в своем стартапе.`,
      },
    ],
  },
};

export const CenteredAccordion: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `centered-accordion`,
  },
};

export const CenteredAccordionOnDark: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `centered-accordion-on-dark`,
  },
};

export const OffsetWithSupportingText: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `offset-with-supporting-text`,
  },
};

export const SideBySide: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `side-by-side`,
  },
};

export const ThreeColumnsOnDark: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `three-columns-on-dark`,
  },
};

export const ThreeColumnsWithCenteredIntroduction: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `three-columns-with-centered-introduction`,
  },
};

export const TwoColumns: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `two-columns`,
  },
};

export const TwoColumnsOnDark: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `two-columns-on-dark`,
  },
};

export const TwoColumnsWithCenteredIntroduction: Story = {
  args: {
    ...ThreeColumns.args,
    variant: `two-columns-with-centered-introduction`,
  },
};
