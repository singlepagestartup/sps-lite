import { Meta, StoryObj } from "@storybook/react";
import ButtonsArrays from ".";
import { IButton } from "../simple-buttons";
import { baseProps as baseButtonProps } from "../simple-buttons/SimpleButton.stories";

const meta = { component: ButtonsArrays } satisfies Meta<typeof ButtonsArrays>;
export default meta;

type Story = StoryObj<typeof meta>;

const baseProps = {
  title: `Buttons Array`,
  buttons: [
    { ...baseButtonProps, variant: `default` } as IButton,
    {
      ...baseButtonProps,
      variant: `default`,
    } as IButton,
  ],
};

export const Simple: Story = {
  args: {
    ...baseProps,
    variant: `simple`,
  },
};

export const Dropdown: Story = {
  args: {
    ...baseProps,
    variant: `dropdown`,
  },
};
