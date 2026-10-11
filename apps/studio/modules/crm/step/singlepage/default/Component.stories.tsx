import type { Meta, StoryObj } from "@storybook/react";

import { CrmStepDefault, defaultCrmStepDefaultProps } from "./Component";

const meta = {
  id: "modules-crm-models-step-singlepage-default",
  title: "Modules/CRM/Step/Singlepage/default",
  component: CrmStepDefault,
  parameters: {
    layout: "padded",
  },
  args: defaultCrmStepDefaultProps,
} satisfies Meta<typeof CrmStepDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
