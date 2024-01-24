import type { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity } from "~redux/services/backend/extensions/sps-website-builder/api/slider/mock/sps-lite";

const meta = {
  component: Root,
} satisfies Meta<typeof Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FadeWithPreviews: Story = {
  args: { ...entity, variant: "fade-with-previews" },
};
