import type { Meta, StoryObj } from "@storybook/react";
import { Component as RbacModuleSubject } from "../../../../../index";
import type { ISelectMethodAiChatProps } from "./Component";
function Example(props: ISelectMethodAiChatProps) {
  return (
    <RbacModuleSubject
      {...props}
      variant="me-authentication-select-method-ai-chat"
    />
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-me-authentication-select-method-ai-chat",
  title: "Modules/RBAC/Subject/Singlepage/authentication/select-method/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
