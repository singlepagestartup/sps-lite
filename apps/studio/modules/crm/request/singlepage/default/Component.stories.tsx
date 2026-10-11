import type { Meta, StoryObj } from "@storybook/react";

import { CrmRequestDefault, defaultCrmRequestDefaultProps } from "./Component";

const meta = {
  id: "modules-crm-models-request-singlepage-default",
  title: "Modules/CRM/Request/Singlepage/default",
  component: CrmRequestDefault,
  parameters: {
    layout: "padded",
  },
  args: defaultCrmRequestDefaultProps,
} satisfies Meta<typeof CrmRequestDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
