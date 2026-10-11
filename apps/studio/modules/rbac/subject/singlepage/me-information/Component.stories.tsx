import type { Meta, StoryObj } from "@storybook/react";

import {
  SubjectMeInformation,
  defaultSubjectMeInformationProps,
} from "./Component";

const meta = {
  id: "modules-rbac-models-subject-singlepage-me-information",
  title: "Modules/RBAC/Subject/Singlepage/me-information",
  component: SubjectMeInformation,
  args: defaultSubjectMeInformationProps,
} satisfies Meta<typeof SubjectMeInformation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
