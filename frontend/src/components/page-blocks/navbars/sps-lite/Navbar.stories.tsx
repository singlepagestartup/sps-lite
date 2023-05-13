import { Meta, StoryObj } from "@storybook/react";
import Navbars, { ISpsLiteNavbarBlock } from ".";
import { spsLiteBackendNavbarBlockSimple } from "~mocks/components/page-blocks/sps-lite";
import { rest, setupWorker } from "msw";
import { BACKEND_URL } from "~utils/envs";
import { spsLiteBackendFlyoutSimple } from "~mocks/collection-types/sps-lite";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";

const meta = { component: Navbars } satisfies Meta<typeof Navbars>;
export default meta;

type Story = StoryObj<typeof meta>;

console.log("If you don't see page block in storybook - refresh the page");

const worker = setupWorker(
  rest.get(
    `${BACKEND_URL}/api/flyout-menus/${spsLiteBackendFlyoutSimple.id}`,
    (req, res, ctx) => {
      return res(ctx.json({ data: spsLiteBackendFlyoutSimple }));
    },
  ),
);

function NavbarBlockComponent(args: ISpsLiteNavbarBlock) {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Navbars {...args} />
      </Provider>
    </div>
  );
}

export const SimpleLinksOnLeft: Story = {
  render: (args: ISpsLiteNavbarBlock) => <NavbarBlockComponent {...args} />,
  args: spsLiteBackendNavbarBlockSimple,
};
