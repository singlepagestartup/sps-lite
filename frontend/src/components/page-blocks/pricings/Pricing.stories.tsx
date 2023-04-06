import { Meta, StoryObj } from "@storybook/react";
import Pricings from ".";
import { SinglePriceWithDetails as SpsLiteSinglePriceWithDetails } from "./sps-lite/Pricing.stories";

const meta = { component: Pricings } satisfies Meta<typeof Pricings>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SinglePriceWithDetails = SpsLiteSinglePriceWithDetails;
