import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCompact, defaultProfileCompactProps } from "./Component";

const meta = {
  id: "modules-social-models-profile-singlepage-compact",
  title: "Modules/Social/Profile/Singlepage/compact",
  component: ProfileCompact,
  parameters: {
    layout: "centered",
  },
  args: defaultProfileCompactProps,
} satisfies Meta<typeof ProfileCompact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
