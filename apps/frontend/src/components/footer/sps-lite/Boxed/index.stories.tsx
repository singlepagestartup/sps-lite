import { Meta, StoryObj } from "@storybook/react";
import { entity as footer } from "~redux/services/backend/extensions/sps-website-builder/api/footer/mock/sps-lite";
import Root from ".";
import { Provider } from "react-redux";
import store from "~redux/index";
import { IFooter } from "../..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

function FooterComponent(args: IFooter) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Root {...args} />
      </Provider>
    </div>
  );
}

export const Index: Story = {
  render: (args) => <FooterComponent {...args} />,
  args: { ...footer, variant: "boxed" },
};
