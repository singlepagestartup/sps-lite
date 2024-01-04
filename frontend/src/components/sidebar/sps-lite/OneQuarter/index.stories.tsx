import { Meta, StoryObj } from "@storybook/react";
import { entity } from "~redux/services/backend/extensions/sps-website-builder/api/sidebar/mock/sps-lite";
import Root from ".";
import { ISidebar } from "../..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

function SidebarComponent(args: ISidebar) {
  return (
    <div className="w-1/3">
      <Root {...args} />
    </div>
  );
}

export const Index: Story = {
  render: (args) => <SidebarComponent {...args} />,
  args: { ...entity },
};
