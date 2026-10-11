import type { Meta, StoryObj } from "@storybook/react";

import {
  CrmInputTextDefault,
  defaultCrmInputTextDefaultProps,
} from "./Component";

const meta = {
  id: "modules-crm-models-input-singlepage-text-default",
  title: "Modules/CRM/Input/Singlepage/text-default",
  component: CrmInputTextDefault,
  parameters: {
    layout: "padded",
  },
  args: defaultCrmInputTextDefaultProps,
} satisfies Meta<typeof CrmInputTextDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
