import { Meta, StoryObj } from "@storybook/react";
import Incentives from ".";
import { FourColumnsWithCompanyMission as SpsLiteFourColumnsWithCompanyMission } from "./sps-lite/Footer.stories";

const meta = { component: Incentives } satisfies Meta<typeof Incentives>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsWithCompanyMission =
  SpsLiteFourColumnsWithCompanyMission;
