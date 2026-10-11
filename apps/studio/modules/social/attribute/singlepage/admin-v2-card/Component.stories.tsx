import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as SocialModuleAttribute } from "../../index";

import fixture from "../admin-v2-table/data.json";

const meta = {
  id: "modules-social-models-attribute-singlepage-admin-v2-card",
  title: "Modules/Social/Attribute/Singlepage/admin-v2-card",
  component: SocialModuleAttribute,
  args: { variant: "admin-v2-card", id: fixture.records[0].id },
  argTypes: { id: { control: "text" } },
} satisfies Meta<typeof SocialModuleAttribute>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
