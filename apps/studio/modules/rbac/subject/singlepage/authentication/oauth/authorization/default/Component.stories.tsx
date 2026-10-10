import type { Meta, StoryObj } from "@storybook/react";
import { Component as RbacModuleSubject } from "../../../../../index";
import type { IOAuthAuthorizationProps } from "./Component";
function Example(props: IOAuthAuthorizationProps) {
  return (
    <RbacModuleSubject
      {...props}
      key={props.initialState}
      variant="authentication-oauth-authorization-default"
    />
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-authentication-oauth-authorization-default",
  title:
    "Modules/Rbac/Models/Subject/Singlepage/authentication/oauth/authorization/default",
  component: Example,
  args: { initialState: "idle" },
  argTypes: {
    initialState: {
      control: "select",
      options: ["idle", "authorize", "complete", "error"],
    },
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
