import { Meta, StoryObj } from "@storybook/react";
import Forms from ".";
import { SimpleCentered as SpsLiteSimpleCentered } from "./sps-lite/Form.stories";

const meta = { component: Forms } satisfies Meta<typeof Forms>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered = SpsLiteSimpleCentered;
