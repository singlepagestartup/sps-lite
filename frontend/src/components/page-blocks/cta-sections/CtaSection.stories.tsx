import { Meta, StoryObj } from "@storybook/react";
import CtaSections from ".";
import { backendCtaSectionBlockSimpleCentered } from "~mocks/components/page-blocks";

const meta = { component: CtaSections } satisfies Meta<typeof CtaSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: backendCtaSectionBlockSimpleCentered,
};

export const DarkPanelWithAppScreenshot: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `dark-panel-with-app-screenshot`,
  },
};
