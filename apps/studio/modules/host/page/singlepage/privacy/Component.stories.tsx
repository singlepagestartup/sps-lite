import type { Meta, StoryObj } from "@storybook/react";

import { PrivacyPage } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-privacy",
  title: "Modules/Host/Page/Singlepage/privacy",
  component: PrivacyPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PrivacyPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
