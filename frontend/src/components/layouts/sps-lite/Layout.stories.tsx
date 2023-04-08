import { Meta, StoryObj } from "@storybook/react";
import Layouts from ".";
import { spsLiteMainPage } from "~mocks/pages/sps-lite";
import { ISpsLiteLayout } from ".";
import store from "~redux/index";
import { Provider } from "react-redux";

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

export const Simple: Story = {
  render: (args) => <LayoutComponent {...args} />,
  args: spsLiteMainPage,
};
