import type { Meta, StoryObj } from "@storybook/react";

import {
  ProfileArticleFindByIdCommentFormDefault,
  defaultProfileArticleFindByIdCommentFormDefaultProps,
} from "./Component";

const meta = {
  id: "modules-social-models-profile-singlepage-article-find-by-id-comment-form-default",
  title:
    "Modules/Social/Profile/Singlepage/article-find-by-id-comment-form-default",
  component: ProfileArticleFindByIdCommentFormDefault,
  parameters: {
    layout: "padded",
  },
  args: defaultProfileArticleFindByIdCommentFormDefaultProps,
} satisfies Meta<typeof ProfileArticleFindByIdCommentFormDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
