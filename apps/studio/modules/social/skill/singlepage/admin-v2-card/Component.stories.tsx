import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as SocialModuleSkill } from "../../index";

import fixture from "../admin-v2-table/data.json";

const meta = {
  id: "modules-social-models-skill-singlepage-admin-v2-card",
  title: "Modules/Social/Skill/Singlepage/admin-v2-card",
  component: SocialModuleSkill,
  args: { variant: "admin-v2-card", id: fixture.records[0].id },
  argTypes: { id: { control: "text" } },
} satisfies Meta<typeof SocialModuleSkill>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
