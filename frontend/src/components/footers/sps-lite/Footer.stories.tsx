import { Meta, StoryObj } from "@storybook/react";
import { entity as footer } from "~redux/services/backend/models/footer/mock/sps-lite";
import Footers, { ISpsLiteFooter } from ".";
import { Provider } from "react-redux";
import store from "~redux/index";

const meta = { component: Footers } satisfies Meta<typeof Footers>;
export default meta;

type Story = StoryObj<typeof meta>;

function FooterComponent(args: ISpsLiteFooter) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Footers {...args} />
      </Provider>
    </div>
  );
}

export const Boxed: Story = {
  render: (args) => <FooterComponent {...args} />,
  args: { ...footer, variant: "boxed" },
};
