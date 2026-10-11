import type { Meta, StoryObj } from "@storybook/react";
import { Component as RbacModuleSubject } from "../../../../../../index";
import type { IAccountChangeProps } from "./Component";
function Example(props: IAccountChangeProps) {
  return (
    <RbacModuleSubject
      {...props}
      variant="me-authentication-email-and-password-account-change-default"
    />
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-authentication-email-and-password-account-change-default",
  title:
    "Modules/RBAC/Subject/Singlepage/authentication/email-and-password/account-change/default",
  component: Example,
  args: { email: "alex@example.com", kind: "email" },
  argTypes: { kind: { control: "select", options: ["email", "password"] } },
} satisfies Meta<typeof Example>;
export default meta;
export const Email: StoryObj<typeof meta> = {};
export const Password: StoryObj<typeof meta> = { args: { kind: "password" } };
