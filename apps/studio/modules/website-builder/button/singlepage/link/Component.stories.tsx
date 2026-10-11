import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLink, defaultButtonLinkProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-button-singlepage-link",
  title: "Modules/Website-Builder/Button/Singlepage/link",
  component: ButtonLink,
  parameters: {
    layout: "centered",
  },
  args: defaultButtonLinkProps,
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
