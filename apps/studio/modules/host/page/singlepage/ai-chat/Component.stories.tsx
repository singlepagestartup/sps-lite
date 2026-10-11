import { AIChatPreview, type IAIChatPreviewProps } from "./Preview";
import { aiChatAccount } from "../../../../rbac/subject/singlepage/me/account/fixture";
import { aiChatWorkspaceFixture } from "../../../../social/profile/singlepage/scope/ai-chat/project/fixtures";
import type { Meta, StoryObj } from "@storybook/react";
type IPageStoryProps = Pick<
  IAIChatPreviewProps,
  "signedIn" | "account" | "profiles"
>;
function Example(props: IPageStoryProps) {
  return <AIChatPreview {...props} initialHref="/ai-chat/" />;
}
const meta = {
  id: "modules-host-models-page-singlepage-ai-chat",
  title: "Modules/Host/Page/Singlepage/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
  args: {
    signedIn: false,
    account: aiChatAccount,
    profiles: aiChatWorkspaceFixture(),
  },
  argTypes: {
    signedIn: { control: "boolean" },
    account: { control: "object" },
    profiles: { control: "object" },
  },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
