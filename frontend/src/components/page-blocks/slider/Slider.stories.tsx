import { Meta, StoryObj } from "@storybook/react";
import Slider from ".";
import { Simple as SpsLiteSimple } from "./sps-lite/Slider.stories";

const meta = { component: Slider } satisfies Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple = SpsLiteSimple;
