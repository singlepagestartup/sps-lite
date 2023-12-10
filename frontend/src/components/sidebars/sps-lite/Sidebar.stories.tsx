import { Meta, StoryObj } from "@storybook/react";
import { entity } from "~redux/services/backend/models/sidebar/mock/sps-lite";
import Sidebars, { ISpsLiteSidebar } from ".";

const meta = { component: Sidebars } satisfies Meta<typeof Sidebars>;
export default meta;

type Story = StoryObj<typeof meta>;

function SidebarComponent(args: ISpsLiteSidebar) {
  return (
    <div className="w-1/3">
      <Sidebars {...args} />
    </div>
  );
}

export const OneQuarter: Story = {
  render: (args) => <SidebarComponent {...args} />,
  args: { ...entity, variant: "one-quarter" },
};
