import { Component as SocialModuleThread } from "../../../index";

import { useState } from "react";
import type { IProjectTopic } from "../../../../profile/singlepage/scope/ai-chat/project/state";
import type { Meta, StoryObj } from "@storybook/react";

function Example() {
  const [topic, setTopic] = useState<IProjectTopic>({
    id: "work",
    title: "Workshop campaign",
    documentIds: [],
    messages: [],
  });
  return (
    <SocialModuleThread
      variant="id-ai-chat-settings"
      topic={topic}
      onSave={(title) => setTopic({ ...topic, title })}
      onDelete={() => {}}
    />
  );
}

const meta = {
  id: "modules-social-models-thread-singlepage-id-ai-chat-settings",
  title: "Modules/Social/Thread/Singlepage/id/ai-chat-settings",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
