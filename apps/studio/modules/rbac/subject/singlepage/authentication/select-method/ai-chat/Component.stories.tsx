import type { Meta, StoryObj } from "@storybook/react";
import { Component as RbacModuleSubject } from "../../../../index";
import type { ISelectMethodAiChatProps } from "./Component";
function Example(props: ISelectMethodAiChatProps) {
  return (
    <RbacModuleSubject
      {...props}
      key={props.initialMethod}
      variant="authentication-select-method-ai-chat"
    />
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-authentication-select-method-ai-chat",
  title:
    "Modules/Rbac/Models/Subject/Singlepage/authentication/select-method/ai-chat",
  component: Example,
  args: { initialMethod: "email-and-password" },
  argTypes: {
    initialMethod: {
      control: "select",
      options: ["email-and-password", "ethereum-virtual-machine", "oauth"],
    },
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
