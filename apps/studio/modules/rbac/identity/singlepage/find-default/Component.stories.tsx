import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  IdentityFindDefault,
  defaultIdentityFindDefaultProps,
} from "./Component";

const meta: Meta<typeof IdentityFindDefault> = {
  id: "modules-rbac-models-identity-singlepage-identity-find-default",
  title: "Modules/RBAC/Identity/Singlepage/identity-find-default",
  component: IdentityFindDefault,
  args: defaultIdentityFindDefaultProps,
};

export default meta;

type Story = StoryObj<typeof IdentityFindDefault>;

export const Default: Story = {
  name: "default",
};

export const Empty: Story = {
  name: "empty",
  args: {
    identities: [],
  },
};
