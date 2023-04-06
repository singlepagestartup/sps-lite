import { Meta, StoryObj } from "@storybook/react";
import ReviewsTables from ".";
import { Simple as SpsLiteSimple } from "./sps-lite/ReviewsTable.stories";

const meta = { component: ReviewsTables } satisfies Meta<typeof ReviewsTables>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple = SpsLiteSimple;
