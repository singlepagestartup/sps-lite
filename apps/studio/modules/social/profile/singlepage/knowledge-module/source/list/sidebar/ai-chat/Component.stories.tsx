import { Component as SocialModuleProfile } from "../../../../../..";
import type { Meta, StoryObj } from "@storybook/react";
function Example() {
  return (
    <div className="bg-sps-graphite p-4 text-white">
      <SocialModuleProfile
        variant="knowledge-module-source-list-sidebar-ai-chat"
        href="/ai-chat/social/profiles/pottery"
        selected
      />
    </div>
  );
}
const meta = {
  id: "modules-social-models-profile-singlepage-knowledge-module-source-list-sidebar-ai-chat",
  title:
    "Modules/Social/Profile/Singlepage/knowledge/source/list/sidebar/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
