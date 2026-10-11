import type { Meta, StoryObj } from "@storybook/react";

import {
  Component as Form,
  defaultSubjectForgotPasswordFormDefaultProps,
} from "./Component";

import { Component as RbacModuleSubject } from "../../../../../../index";
function Example(props: React.ComponentProps<typeof Form>) {
  return (
    <RbacModuleSubject
      {...props}
      variant="me-authentication-email-and-password-forgot-password-form-default"
    />
  );
}

const meta = {
  id: "modules-rbac-models-subject-singlepage-authentication-email-and-password-forgot-password-form-default",
  title:
    "Modules/RBAC/Subject/Singlepage/authentication/email-and-password/forgot-password-form/default",
  component: Example,
  args: defaultSubjectForgotPasswordFormDefaultProps,
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};

export const Sent: Story = {
  args: {
    sent: true,
  },
  name: "sent",
};
