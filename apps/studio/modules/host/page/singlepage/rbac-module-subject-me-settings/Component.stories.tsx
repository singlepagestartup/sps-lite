import type { Meta, StoryObj } from "@storybook/react";

import { ProfileDefault } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-rbac-module-subject-me-settings",
  title: "Modules/Host/Page/Singlepage/rbac-module-subject-me-settings",
  component: ProfileDefault,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProfileDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
