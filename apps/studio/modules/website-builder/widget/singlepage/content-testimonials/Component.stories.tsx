import type { Meta, StoryObj } from "@storybook/react";
import {
  ContentTestimonials,
  defaultContentTestimonialsProps,
} from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-testimonials",
  title: "Modules/Website-Builder/Widget/Singlepage/content-testimonials",
  component: ContentTestimonials,
  parameters: { layout: "fullscreen" },
  args: defaultContentTestimonialsProps,
} satisfies Meta<typeof ContentTestimonials>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
