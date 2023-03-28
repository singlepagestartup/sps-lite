import { Meta, StoryObj } from "@storybook/react";
import ButtonsArrays from ".";
import * as ButtonStories from "../simple-buttons/SimpleButton.stories";

const meta = { component: ButtonsArrays } satisfies Meta<typeof ButtonsArrays>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: `Buttons Array`,
    buttons: [
      { ...ButtonStories.Default.args },
      { ...ButtonStories.Default.args },
    ],
    variant: `simple`,
  },
};

export const Dropdown: Story = {
  args: {
    ...Simple.args,
    variant: `dropdown`,
  },
};
