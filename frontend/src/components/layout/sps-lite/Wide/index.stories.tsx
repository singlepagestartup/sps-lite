import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import store from "~redux/index";
import { Provider } from "react-redux";
import { entity as layout } from "~redux/services/backend/extensions/sps-website-builder/api/layout/mock/sps-lite";
import { ILayout } from "../..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

function LayoutComponent(args: ILayout) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Root {...args} />
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

export const Index: Story = {
  render: (args) => <LayoutComponent {...args} />,
  args: { ...layout, children: <PageBlocks />, sidebar: null },
};
