import { Meta, StoryObj } from "@storybook/react";
import Layouts, { ISpsLiteLayout } from ".";
import store from "~redux/index";
import { Provider } from "react-redux";
import { entity as layout } from "~redux/services/backend/api/layout/mock/sps-lite";

const meta = { component: Layouts } satisfies Meta<typeof Layouts>;
export default meta;

type Story = StoryObj<typeof meta>;

function LayoutComponent(args: ISpsLiteLayout) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Layouts {...args} />
      </Provider>
    </div>
  );
}

function PageBlocks() {
  return (
    <div className="w-full h-screen bg-gray-100 mx-auto border border-dashed border-gray-500 px-5 rounded-md flex items-center justify-center">
      <p className="text-5xl font-bold text-gray-500">Page Blocks</p>
    </div>
  );
}

export const Wide: Story = {
  render: (args) => <LayoutComponent {...args} />,
  args: { ...layout, variant: "wide", children: <PageBlocks />, sidebar: null },
};

export const Boxed: Story = {
  render: (args) => <LayoutComponent {...args} />,
  args: {
    ...layout,
    variant: "boxed",
    children: <PageBlocks />,
    sidebar: null,
  },
};
