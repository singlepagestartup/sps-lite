import { Meta, StoryObj } from "@storybook/react";
import { spsLiteBackendSidebarSimple } from "~mocks/collection-types/sps-lite";
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

export const Simple: Story = {
  render: (args) => <SidebarComponent {...args} />,
  args: spsLiteBackendSidebarSimple,
};
