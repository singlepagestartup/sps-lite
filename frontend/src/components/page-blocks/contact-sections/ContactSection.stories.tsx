import { Meta, StoryObj } from "@storybook/react";
import ContactSectons from ".";
import { Centered as SpsLiteCentered } from "./sps-lite/ContactSection.stories";

const meta = { component: ContactSectons } satisfies Meta<
  typeof ContactSectons
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Centered = SpsLiteCentered;
