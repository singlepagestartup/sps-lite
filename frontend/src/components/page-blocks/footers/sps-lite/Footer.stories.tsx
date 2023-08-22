import { Meta, StoryObj } from "@storybook/react";
import Incentives from ".";
import { spsLiteBackendFooterBlockSimple } from "~mocks/components/page-blocks/sps-lite";
import Footers from "./index";

const meta = { component: Footers } satisfies Meta<typeof Footers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsWithCompanyMission: Story = {
  args: spsLiteBackendFooterBlockSimple,
};
