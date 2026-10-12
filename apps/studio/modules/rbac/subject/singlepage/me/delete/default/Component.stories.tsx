import type { Meta, StoryObj } from "@storybook/react";

import { SubjectMeDelete, defaultSubjectMeDeleteProps } from "./Component";

const meta = {
  id: "modules-rbac-models-subject-singlepage-me-delete",
  title: "Modules/RBAC/Subject/Singlepage/me/delete/default",
  component: SubjectMeDelete,
  args: defaultSubjectMeDeleteProps,
} satisfies Meta<typeof SubjectMeDelete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
