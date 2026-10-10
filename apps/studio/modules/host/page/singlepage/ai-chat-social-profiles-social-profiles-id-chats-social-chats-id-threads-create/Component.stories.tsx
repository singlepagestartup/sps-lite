import { AIChatPreview } from "../../../../../workspace/products/singlepage/ai-chat/website/Preview";
import type { Meta, StoryObj } from "@storybook/react";
function Example() {
  return (
    <AIChatPreview initialHref="/ai-chat/social/profiles/pottery/chats/pottery%3Aproject-chat/threads/create" />
  );
}
const meta = {
  id: "modules-host-models-page-singlepage-ai-chat-social-profiles-social-profiles-id-chats-social-chats-id-threads-create",
  title: "Modules/Host/Models/Page/Singlepage",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {
  name: "/ai-chat/social/profiles/[social.profiles.id]/chats/[social.chats.id]/threads/create",
};
