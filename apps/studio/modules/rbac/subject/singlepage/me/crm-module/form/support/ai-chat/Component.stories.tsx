import { Component as RbacModuleSubject } from "../../../../../..";
import type { Meta, StoryObj } from "@storybook/react";
function Example() {
  return <RbacModuleSubject variant="me-crm-module-form-support-ai-chat" />;
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-me-crm-module-form-support-ai-chat",
  title: "Modules/RBAC/Subject/Singlepage/me/crm-module/form/support/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
