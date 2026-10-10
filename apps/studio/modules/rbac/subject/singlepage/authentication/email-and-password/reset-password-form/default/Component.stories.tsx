import type { Meta, StoryObj } from "@storybook/react";

import {
  Component as Form,
  defaultSubjectResetPasswordFormDefaultProps,
} from "./Component";

import { Component as RbacModuleSubject } from "../../../../../index";
function Example(props: React.ComponentProps<typeof Form>) {
  return (
    <RbacModuleSubject
      {...props}
      variant="authentication-email-and-password-reset-password-form-default"
    />
  );
}

const meta = {
  title:
    "Modules/RBAC/Models/Subject/Singlepage/authentication/email-and-password/reset-password-form/default",
  component: Example,
  args: defaultSubjectResetPasswordFormDefaultProps,
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
