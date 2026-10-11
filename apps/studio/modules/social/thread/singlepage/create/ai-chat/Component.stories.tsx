import { Component as SocialModuleThread } from "../../../index";

import type { Meta, StoryObj } from "@storybook/react";

function Example() {
  return (
    <SocialModuleThread variant="create-ai-chat">
      <p className="p-6">Subject thread creation form slot</p>
    </SocialModuleThread>
  );
}

const meta = {
  id: "modules-social-models-thread-singlepage-create-ai-chat",
  title: "Modules/Social/Thread/Singlepage/create/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
