import { Meta, StoryObj } from "@storybook/react";
import Cards from ".";
import { Simple as SpsSimple } from "./sps-lite/Card.stories";

const meta = { component: Cards } satisfies Meta<typeof Cards>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple = SpsSimple;
