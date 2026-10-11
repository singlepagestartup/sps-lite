import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard, defaultProfileCardProps } from "./Component";

const meta = {
  id: "modules-social-models-profile-singlepage-card",
  title: "Modules/Social/Profile/Singlepage/card",
  component: ProfileCard,
  parameters: {
    layout: "centered",
  },
  args: defaultProfileCardProps,
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
