import { AIChatPreview } from "../ai-chat/Preview";
import type { Meta, StoryObj } from "@storybook/react";
function Example() {
  return (
    <AIChatPreview initialHref="/ai-chat/rbac/subjects/authentication/select-method" />
  );
}
const meta = {
  id: "modules-host-models-page-singlepage-ai-chat-rbac-subjects-authentication-select-method",
  title: "Modules/Host/Models/Page/Singlepage",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {
  name: "/ai-chat/rbac/subjects/authentication/select-method",
};
