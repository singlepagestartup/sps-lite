import { Meta, StoryObj } from "@storybook/react";
import ButtonsArrays from ".";
import { baseProps } from "../simple-buttons/SimpleButton.stories";

const meta = { component: ButtonsArrays } satisfies Meta<typeof ButtonsArrays>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: `Buttons Array`,
    variant: `simple`,
    buttons: [
      { ...baseProps, variant: `default` },
      {
        ...baseProps,
        variant: `default`,
      },
    ],
  },
};
