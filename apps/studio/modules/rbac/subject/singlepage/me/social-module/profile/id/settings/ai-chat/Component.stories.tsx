import type { Meta, StoryObj } from "@storybook/react";

import {
  SubjectMeProfileInformation,
  defaultSubjectMeProfileInformationProps,
} from "./Component";

const meta = {
  id: "modules-rbac-models-subject-singlepage-me-social-module-profile-id-settings-ai-chat",
  title:
    "Modules/RBAC/Subject/Singlepage/me/social-module/profile/id/settings/ai-chat",
  component: SubjectMeProfileInformation,
  args: defaultSubjectMeProfileInformationProps,
  argTypes: { saveError: { control: "text" } },
} satisfies Meta<typeof SubjectMeProfileInformation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};

export const SaveError: Story = {
  args: { saveError: "Conflict error. Entity already exists" },
};
