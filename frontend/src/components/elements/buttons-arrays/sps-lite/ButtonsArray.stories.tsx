import { Meta, StoryObj } from "@storybook/react";
import ButtonsArrays from ".";
import { entity as buttonsArray } from "~redux/services/backend/components/elements/buttons-array/mock/sps-lite";

const meta = {
  component: ButtonsArrays,
  decorators: [
    (Story) => (
      <div className="px-32 pt-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonsArrays>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: buttonsArray,
};
