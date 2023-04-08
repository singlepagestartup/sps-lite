import { Meta, StoryObj } from "@storybook/react";
import PublicPageLayouts from ".";
import { spsLiteMainPage } from "~mocks/pages/sps-lite";
import { ISpsLitePublicPageLayoutBlock } from ".";
import store from "~redux/index";
import { Provider } from "react-redux";

const meta = { component: PublicPageLayouts } satisfies Meta<
  typeof PublicPageLayouts
>;
export default meta;

type Story = StoryObj<typeof meta>;

function PublicPageLayoutComponent(args: ISpsLitePublicPageLayoutBlock) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <PublicPageLayouts {...args} />
      </Provider>
    </div>
  );
}

export const Simple: Story = {
  render: (args) => <PublicPageLayoutComponent {...args} />,
  args: spsLiteMainPage,
};
