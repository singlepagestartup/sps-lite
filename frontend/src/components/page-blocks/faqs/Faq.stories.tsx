import { Meta, StoryObj } from "@storybook/react";
import Faqs from ".";
import { TwoColumnsWithCenteredIntroduction as SpsLiteTwoColumnsWithCenteredIntroduction } from "./sps-lite/Faq.stories";

const meta = { component: Faqs } satisfies Meta<typeof Faqs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TwoColumnsWithCenteredIntroduction =
  SpsLiteTwoColumnsWithCenteredIntroduction;
