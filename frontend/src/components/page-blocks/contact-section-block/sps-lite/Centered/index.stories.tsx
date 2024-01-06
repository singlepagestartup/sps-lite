import { Meta, StoryObj } from "@storybook/react";
import Root from ".";
import { entity as contactSectionBlock } from "~redux/services/backend/components/page-blocks/contact-section-block/mock/sps-lite";
import { Provider } from "react-redux";
import store from "~redux/index";
import { IPageBlock } from "../..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  render: (args) => <ContactSectonComponent {...args} />,
  args: { ...contactSectionBlock },
};

function ContactSectonComponent(args: IPageBlock) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Root {...args} />
      </Provider>
    </div>
  );
}
