import type { Meta, StoryObj } from "@storybook/react";

import { NavbarDefault, defaultNavbarDefaultProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-navbar-default",
  title: "Modules/Website-Builder/Widget/Singlepage/navbar-default",
  component: NavbarDefault,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultNavbarDefaultProps,
} satisfies Meta<typeof NavbarDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};

export const WithSlots: Story = {
  name: "with account and cart slots",
  args: {
    subjectAccount: <button type="button">Profile slot</button>,
    cartButton: <button type="button">Cart slot</button>,
  },
};
