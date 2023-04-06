import { Meta, StoryObj } from "@storybook/react";
import FeatureSections from ".";
import {
  WithProductScreenshot as SpsLiteWithProductScreenshot,
  CenteredTwoXTwoGrid as SpsLiteCenteredTwoXTwoGrid,
} from "./sps-lite/FeatureSection.stories";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithProductScreenshot = SpsLiteWithProductScreenshot;

export const CenteredTwoXTwoGrid = SpsLiteCenteredTwoXTwoGrid;
