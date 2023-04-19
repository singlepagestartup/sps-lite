import type { Meta, StoryObj } from "@storybook/react";
import FlyoutMenu from "..";
import { spsLiteBackendButtonSecondaryWithFlyoutMenu } from "~mocks/components/elements/sps-lite";
import { rest, setupWorker } from "msw";
import { spsLiteBackendFlyoutMenuSimple } from "~mocks/collection-types/sps-lite";
import { BACKEND_URL } from "~utils/envs";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import Buttons from "~components/elements/buttons";
import { ISpsLiteButton } from "~components/elements/buttons/sps-lite";

const meta = {
  component: FlyoutMenu,
} satisfies Meta<typeof FlyoutMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

const worker = setupWorker(
  rest.get(
    `${BACKEND_URL}/api/flyout-menus/${spsLiteBackendFlyoutMenuSimple.id}`,
    (req, res, ctx) => {
      return res(ctx.json({ data: spsLiteBackendFlyoutMenuSimple }));
    }
  )
);

function FlyoutMenuButtonComponent(args: ISpsLiteButton) {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Buttons {...args} />
      </Provider>
    </div>
  );
}

export const Simple: Story = {
  render: (args) => <FlyoutMenuButtonComponent {...args} />,
  args: spsLiteBackendButtonSecondaryWithFlyoutMenu,
};
