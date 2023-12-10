import { Meta, StoryObj } from "@storybook/react";
import ContactSectons, { ISpsLiteContactSectonBlock } from ".";
import { entity as contactSectionBlock } from "~redux/services/backend/components/page-blocks/contact-section-block/mock/sps-lite";
import { useEffect } from "react";
import { BACKEND_URL } from "~utils/envs";
import { Provider } from "react-redux";
import store from "~redux/index";

const meta = { component: ContactSectons } satisfies Meta<
  typeof ContactSectons
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  render: (args) => <ContactSectonComponent {...args} />,
  args: { ...contactSectionBlock, variant: "centered" },
};

// const worker = setupWorker(
//   rest.post(`${BACKEND_URL}/api/form-requests`, (req, res, ctx) => {
//     return res(ctx.json({}));
//   }),
// );

function ContactSectonComponent(args: ISpsLiteContactSectonBlock) {
  // useEffect(() => {
  //   worker.start();
  // }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <ContactSectons {...args} />
      </Provider>
    </div>
  );
}
