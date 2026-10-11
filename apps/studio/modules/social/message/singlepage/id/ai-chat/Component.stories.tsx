import { Component as SocialModuleMessage } from "../../../index";

import { documentAgent } from "../../../../profile/singlepage/agent/id/ai-chat/resolver";
import type { Meta, StoryObj } from "@storybook/react";

function Example() {
  return (
    <SocialModuleMessage
      variant="id-ai-chat"
      message={{
        id: "brief-intro",
        role: "assistant",
        text: "Who is the workshop for?",
      }}
      agent={documentAgent("brief")}
      showContext
      onSelect={() => {}}
    />
  );
}

const meta = {
  id: "modules-social-models-message-singlepage-id-ai-chat",
  title: "Modules/Social/Message/Singlepage/id/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
