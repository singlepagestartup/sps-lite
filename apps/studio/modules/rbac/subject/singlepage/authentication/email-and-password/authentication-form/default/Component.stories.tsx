import type { Meta, StoryObj } from "@storybook/react";

import {
  Component as Form,
  defaultSubjectAuthenticationFormDefaultProps,
} from "./Component";

import { Component as RbacModuleSubject } from "../../../../../index";
function Example(props: React.ComponentProps<typeof Form>) {
  return (
    <RbacModuleSubject
      {...props}
      variant="authentication-email-and-password-authentication-form-default"
    />
  );
}

const meta = {
  title:
    "Modules/RBAC/Models/Subject/Singlepage/authentication/email-and-password/authentication-form/default",
  component: Example,
  args: defaultSubjectAuthenticationFormDefaultProps,
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
