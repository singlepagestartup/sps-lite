import type { Meta, StoryObj } from "@storybook/react";

import { ProfileAuthor, defaultProfileAuthorProps } from "./Component";

const meta = {
  id: "modules-social-models-profile-singlepage-author",
  title: "Modules/Social/Profile/Singlepage/author",
  component: ProfileAuthor,
  parameters: { layout: "fullscreen" },
  args: defaultProfileAuthorProps,
} satisfies Meta<typeof ProfileAuthor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
