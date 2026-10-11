import type { Meta, StoryObj } from "@storybook/react";

import {
  ProfileArticleFindByIdCommentFindDefault,
  defaultProfileArticleFindByIdCommentFindDefaultProps,
} from "./Component";

const meta = {
  id: "modules-social-models-widget-singlepage-profile-article-find-by-id-comment-find-default",
  title:
    "Modules/Social/Widget/Singlepage/profile-article-find-by-id-comment-find-default",
  component: ProfileArticleFindByIdCommentFindDefault,
  parameters: {
    layout: "padded",
  },
  args: defaultProfileArticleFindByIdCommentFindDefaultProps,
} satisfies Meta<typeof ProfileArticleFindByIdCommentFindDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
