import type { Meta, StoryObj } from "@storybook/react";

import {
  Component as Form,
  defaultSubjectRegistrationFormDefaultProps,
} from "./Component";

import { Component as RbacModuleSubject } from "../../../../../../index";
function Example(props: React.ComponentProps<typeof Form>) {
  return (
    <RbacModuleSubject
      {...props}
      variant="me-authentication-email-and-password-registration-form-default"
    />
  );
}

const meta = {
  id: "modules-rbac-models-subject-singlepage-authentication-email-and-password-registration-form-default",
  title:
    "Modules/RBAC/Subject/Singlepage/authentication/email-and-password/registration-form/default",
  component: Example,
  args: defaultSubjectRegistrationFormDefaultProps,
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
