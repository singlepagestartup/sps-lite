import type { Meta, StoryObj } from "@storybook/react";

import { RbacSubjectAuthenticationResetPassword } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-rbac-module-subject-me-authentication-reset-password",
  title:
    "Modules/Host/Page/Singlepage/rbac-module-subject-me-authentication-reset-password",
  component: RbacSubjectAuthenticationResetPassword,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof RbacSubjectAuthenticationResetPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
