import type { Meta, StoryObj } from "@storybook/react";

import { ButtonPrimary, defaultButtonPrimaryProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-button-singlepage-primary",
  title: "Modules/Website-Builder/Button/Singlepage/primary",
  component: ButtonPrimary,
  parameters: {
    layout: "centered",
  },
  args: defaultButtonPrimaryProps,
} satisfies Meta<typeof ButtonPrimary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
