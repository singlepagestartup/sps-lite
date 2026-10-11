import { Component as FileStorageModuleFile } from "../../index";

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilesProvider } from "./Files";
import { aiChatSourceFixture } from "../../../../social/profile/singlepage/scope/ai-chat/project/fixtures";
import { AccountProvider } from "../../../../rbac/subject/singlepage/me/account/Account";
import { aiChatAccount } from "../../../../rbac/subject/singlepage/me/account/fixture";
function Example() {
  const { files } = aiChatSourceFixture();
  const [ids, setIds] = useState(files.map((file) => file.id));
  return (
    <FilesProvider initialFiles={files}>
      <FileStorageModuleFile
        variant="list-attachments-ai-chat"
        section="Products"
        fileIds={ids}
        onAttach={(next) =>
          setIds((current) => [...new Set([...current, ...next])])
        }
        onRemove={(id) =>
          setIds((current) => current.filter((value) => value !== id))
        }
      />
    </FilesProvider>
  );
}

const meta = {
  id: "modules-file-storage-models-file-singlepage-list-attachments-ai-chat",
  title: "Modules/File-Storage/File/Singlepage/list-attachments-ai-chat",
  component: Example,
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
