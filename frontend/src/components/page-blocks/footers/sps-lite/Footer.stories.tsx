import { Meta, StoryObj } from "@storybook/react";
import { entity } from "~redux/services/backend/components/page-blocks/footer-block/mock/sps-lite";
import Footers from "./index";

const meta = { component: Footers } satisfies Meta<typeof Footers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsWithCompanyMission: Story = {
  args: { ...entity, variant: "four-columns-with-company-mission" },
};
