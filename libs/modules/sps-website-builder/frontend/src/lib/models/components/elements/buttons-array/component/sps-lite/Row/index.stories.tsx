import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { Component as buttonsArray } from "@sps/sps-website-builder-contracts/lib/models/buttons-array/mock/sps-lite";

const meta = {
  component: Root,
  decorators: [
    (Story) => (
      <div className="px-32 pt-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: buttonsArray,
};
