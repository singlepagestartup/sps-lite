import type { Meta, StoryObj } from "@storybook/react";

import { TermsPage } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-terms",
  title: "Modules/Host/Page/Singlepage/terms",
  component: TermsPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TermsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
