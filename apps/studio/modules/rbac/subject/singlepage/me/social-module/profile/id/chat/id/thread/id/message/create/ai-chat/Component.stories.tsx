import { Component as RbacModuleSubject } from "../../../../../../../../../../../../index";
import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../../../../../../../../../account/Account";
import { aiChatAccount } from "../../../../../../../../../../account/fixture";
import { FilesProvider } from "../../../../../../../../../../../../../../file-storage/file/singlepage/list-attachments-ai-chat/Files";
import { SourceProvider } from "../../../../../../../../../../../../../../knowledge/source/singlepage/id/ai-chat/Source";
import { ThreadProvider } from "../../../../../../../../../../../../../../social/thread/singlepage/id/ai-chat/Thread";

import { aiChatAttachmentFixture } from "../../../../../../../../../../../../../../social/profile/singlepage/scope/ai-chat/project/fixtures";
interface IExampleProps {
  fileCount?: number;
  draft?: string;
  sending?: boolean;
  failed?: boolean;
  unsupported?: boolean;
}
function Example({
  fileCount = 0,
  draft = "",
  sending = false,
  failed = false,
  unsupported = false,
}: IExampleProps) {
  const files = aiChatAttachmentFixture(fileCount);
  return (
    <FilesProvider
      key={`${fileCount}:${draft}:${sending}:${failed}:${unsupported}`}
      initialFiles={files}
    >
      <SourceProvider profileId="pottery">
        <ThreadProvider
          initialFileIds={files.map((file) => file.id)}
          initialDraft={draft}
        >
          <div className="mx-auto max-w-xl">
            <RbacModuleSubject
              variant="me-social-module-profile-id-chat-id-thread-id-message-create-ai-chat"
              sending={sending}
              initialError={
                unsupported
                  ? "Unsupported files: Reference.svg. Allowed formats: PNG, JPG, WebP, GIF, PDF, TXT, MD, CSV, JSON."
                  : failed
                    ? "Message could not be sent. Your text and files are still here."
                    : ""
              }
            />
          </div>
        </ThreadProvider>
      </SourceProvider>
    </FilesProvider>
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-me-social-module-profile-id-chat-id-thread-id-message-create-ai-chat",
  title:
    "Modules/RBAC/Subject/Singlepage/me/social-module/profile/id/chat/id/thread/id/message/create/ai-chat",
  component: Example,
  args: { fileCount: 0, draft: "", sending: false, failed: false },
  argTypes: {
    fileCount: { control: { type: "number", min: 0, max: 13 } },
    draft: { control: "text" },
    sending: { control: "boolean" },
    failed: { control: "boolean" },
  },
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <AccountProvider account={aiChatAccount}>
        <Story />
      </AccountProvider>
    ),
  ],
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};

export const WithAttachments: StoryObj<typeof meta> = {
  args: { fileCount: 4 },
};
export const WithMessageAndAttachments: StoryObj<typeof meta> = {
  args: {
    fileCount: 4,
    draft: "Use these references to review the workshop description.",
  },
};
export const Sending: StoryObj<typeof meta> = {
  args: { fileCount: 4, draft: "Review these references.", sending: true },
};
export const SendError: StoryObj<typeof meta> = {
  args: { fileCount: 4, draft: "Review these references.", failed: true },
};

export const UnsupportedFiles: StoryObj<typeof meta> = {
  args: { fileCount: 1, unsupported: true },
};
