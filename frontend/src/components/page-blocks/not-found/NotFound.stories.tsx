import { Meta, StoryObj } from "@storybook/react";
import NotFound from ".";
import { Simple as SpsLiteSimple } from "./sps-lite/NotFound.stories";

const meta = { component: NotFound } satisfies Meta<typeof NotFound>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple = SpsLiteSimple;
