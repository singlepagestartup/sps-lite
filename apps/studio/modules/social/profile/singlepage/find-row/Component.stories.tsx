import type { Meta, StoryObj } from "@storybook/react";

import { ProfileFindRow, defaultProfileFindRowProps } from "./Component";

const meta = {
  id: "modules-social-models-profile-singlepage-find-row",
  title: "Modules/Social/Profile/Singlepage/find-row",
  component: ProfileFindRow,
  parameters: {
    layout: "centered",
  },
  args: defaultProfileFindRowProps,
} satisfies Meta<typeof ProfileFindRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
