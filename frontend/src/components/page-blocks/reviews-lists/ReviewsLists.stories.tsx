import { Meta, StoryObj } from "@storybook/react";
import ReviewsLists from ".";
import { SimpleCentered as SpsLiteSimpleCentered } from "./sps-lite/ReviewsLists.stories";

const meta = { component: ReviewsLists } satisfies Meta<typeof ReviewsLists>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered = SpsLiteSimpleCentered;
