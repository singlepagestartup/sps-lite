import { Meta, StoryObj } from "@storybook/react";
import Reviews from ".";
import { SimpleCentered as SpsLiteSimpleCentered } from "./sps-lite/Review.stories";

const meta = { component: Reviews } satisfies Meta<typeof Reviews>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered = SpsLiteSimpleCentered;
