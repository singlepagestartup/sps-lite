import type { Meta, StoryObj } from "@storybook/react";

import {
  SubjectMeCrmFormDefault,
  defaultSubjectMeCrmFormDefaultProps,
} from "./Component";

const meta = {
  id: "modules-rbac-models-subject-singlepage-me-crm-module-form-default",
  title: "Modules/RBAC/Subject/Singlepage/me-crm-module-form-default",
  component: SubjectMeCrmFormDefault,
  args: defaultSubjectMeCrmFormDefaultProps,
} satisfies Meta<typeof SubjectMeCrmFormDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
