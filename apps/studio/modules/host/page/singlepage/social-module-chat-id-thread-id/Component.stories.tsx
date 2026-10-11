import type { Meta, StoryObj } from "@storybook/react";

import { ChatDefault } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-social-module-chat-id-thread-id",
  title: "Modules/Host/Page/Singlepage/social-module-chat-id-thread-id",
  component: ChatDefault,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ChatDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
