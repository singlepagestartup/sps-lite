import { Meta, StoryObj } from "@storybook/react";
import Incentives from ".";
import { FourColumnsWithCompanyMission as SpsLiteFourColumnsWithCompanyMission } from "./sps-lite/Footer.stories";
import Footers from "./index";

const meta = { component: Footers } satisfies Meta<typeof Footers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsWithCompanyMission =
  SpsLiteFourColumnsWithCompanyMission;
