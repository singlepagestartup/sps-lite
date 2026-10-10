import type { Meta, StoryObj } from "@storybook/react";
import { Component as RbacModuleSubject } from "../../../../index";
import type { ISelectMethodProps } from "./Component";
function Example(props: ISelectMethodProps) {
  return (
    <RbacModuleSubject
      {...props}
      key={props.initialMethod}
      variant="authentication-select-method-default"
    />
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-authentication-select-method-default",
  title:
    "Modules/Rbac/Models/Subject/Singlepage/authentication/select-method/default",
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
