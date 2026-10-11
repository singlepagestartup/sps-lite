import type { Meta, StoryObj } from "@storybook/react";

import {
  CrmInputTextareaDefault,
  defaultCrmInputTextareaDefaultProps,
} from "./Component";

const meta = {
  id: "modules-crm-models-input-singlepage-textarea-default",
  title: "Modules/CRM/Input/Singlepage/textarea-default",
  component: CrmInputTextareaDefault,
  parameters: {
    layout: "padded",
  },
  args: defaultCrmInputTextareaDefaultProps,
} satisfies Meta<typeof CrmInputTextareaDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
