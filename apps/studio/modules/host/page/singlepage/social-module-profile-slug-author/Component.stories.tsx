import type { Meta, StoryObj } from "@storybook/react";

import { SocialProfileFindByIdOverviewAuthor } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-social-module-profile-slug-author",
  title: "Modules/Host/Page/Singlepage/social-module-profile-slug-author",
  component: SocialProfileFindByIdOverviewAuthor,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SocialProfileFindByIdOverviewAuthor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
