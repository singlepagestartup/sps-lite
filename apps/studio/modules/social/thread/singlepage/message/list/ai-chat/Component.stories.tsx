import { Component as SocialModuleThread } from "../../../../index";
import type { Meta, StoryObj } from "@storybook/react";
import { FilesProvider } from "../../../../../../file-storage/file/singlepage/list-attachments-ai-chat/Files";
import { SourceProvider } from "../../../../../../knowledge/source/singlepage/id/ai-chat/Source";
import { ThreadProvider } from "../../../id/ai-chat/Thread";

function Example() {
  return (
    <FilesProvider>
      <SourceProvider profileId="pottery">
        <ThreadProvider>
          <SocialModuleThread variant="message-list-ai-chat" />
        </ThreadProvider>
      </SourceProvider>
    </FilesProvider>
  );
}

const meta = {
  id: "modules-social-models-thread-singlepage-message-list-ai-chat",
  title: "Modules/Social/Thread/Singlepage/message/list/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
