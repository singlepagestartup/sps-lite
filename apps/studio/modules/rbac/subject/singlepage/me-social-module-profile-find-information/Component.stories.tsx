import type { Meta, StoryObj } from "@storybook/react";

import {
  SubjectMeSocialModuleProfileFindInformation,
  defaultSubjectMeSocialModuleProfileFindInformationProps,
} from "./Component";

const meta = {
  id: "modules-rbac-models-subject-singlepage-me-social-module-profile-find-information",
  title:
    "Modules/RBAC/Subject/Singlepage/me-social-module-profile-find-information",
  component: SubjectMeSocialModuleProfileFindInformation,
  args: defaultSubjectMeSocialModuleProfileFindInformationProps,
} satisfies Meta<typeof SubjectMeSocialModuleProfileFindInformation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
