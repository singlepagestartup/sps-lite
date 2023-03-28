import type { Meta, StoryObj } from "@storybook/react";
import { ISlide } from "types";
import * as ButtonStories from "~components/buttons/simple-buttons/SimpleButton.stories";
import Slider from ".";

const meta = {
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

const slide = {
  id: 1,
  title: `Конструктор блоков страниц`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  media: {
    id: 274,
    mime: `image/jpeg`,
    alternativeText: ``,
    url: `https://721511.selcdn.ru/sps-lite-rogwild/pexels_karolina_grabowska_5882683_798121d61e.jpg`,
  },
  buttons: [
    {
      ...ButtonStories.Default.args,
    },
  ],
} as ISlide;

const slides = Array(4).fill(slide);

export const FadeWithPreviews: Story = {
  args: {
    slides,
    variant: `fade-with-previews`,
    aspectRatioClassName: `aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10`,
    showBackdrop: true,
    showFullScreen: true,
    showPreviews: true,
  },
};
