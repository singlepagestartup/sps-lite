import { Component as SocialModuleSkill } from "../../../index";

import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  id: "modules-social-models-skill-singlepage-id-ai-chat",
  title: "Modules/Social/Skill/Singlepage/id/ai-chat",
  component: SocialModuleSkill,
  args: { variant: "id-ai-chat" },
} satisfies Meta<typeof SocialModuleSkill>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
