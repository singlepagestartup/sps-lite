import type { Meta, StoryObj } from "@storybook/react";

import { CrmFormDefault, defaultCrmFormDefaultProps } from "./Component";

const meta = {
  id: "modules-crm-models-form-singlepage-default",
  title: "Modules/CRM/Form/Singlepage/default",
  component: CrmFormDefault,
  parameters: {
    layout: "padded",
  },
  args: defaultCrmFormDefaultProps,
} satisfies Meta<typeof CrmFormDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
