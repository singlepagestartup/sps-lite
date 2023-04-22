import { Meta, StoryObj } from "@storybook/react";
import Layouts from ".";
import { ISpsLiteLayout } from ".";
import store from "~redux/index";
import { Provider } from "react-redux";
import { spsLiteBackendLayoutWide } from "~mocks/collection-types/sps-lite";

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
    <div>
      <p>Page Blocks</p>
    </div>
  );
}

export const Wide: Story = {
  render: (args) => <LayoutComponent {...args} />,
  args: { ...spsLiteBackendLayoutWide, children: <PageBlocks /> },
};
