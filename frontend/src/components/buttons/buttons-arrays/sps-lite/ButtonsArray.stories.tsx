import { Meta, StoryObj } from "@storybook/react";
import ButtonsArrays from "..";
import {
  backendButtonsArrayDropdown,
  backendButtonsArraySimple,
} from "~mocks/components/elements";

const meta = { component: ButtonsArrays } satisfies Meta<typeof ButtonsArrays>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: backendButtonsArraySimple,
};

export const Dropdown: Story = {
  args: backendButtonsArrayDropdown,
};
