import { Meta, StoryObj } from "@storybook/react";
import {
  backendButtonsArrayDropdown,
  backendButtonsArraySimple,
} from "~mocks/components";
import ButtonsArrays from ".";

const meta = { component: ButtonsArrays } satisfies Meta<typeof ButtonsArrays>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: backendButtonsArraySimple,
};

export const Dropdown: Story = {
  args: backendButtonsArrayDropdown,
};
