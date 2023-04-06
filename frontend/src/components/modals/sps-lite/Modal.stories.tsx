import type { Meta, StoryObj } from "@storybook/react";
import { setupWorker, rest } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Modals from "..";
import { spsLiteBackendModal } from "~mocks/collection-types/sps-lite";

const meta = {
  component: Modals,
} satisfies Meta<typeof Modals>;

export default meta;

type Story = StoryObj<typeof meta>;

const worker = setupWorker(
  rest.get(`${BACKEND_URL}/api/modals`, (req, res, ctx) => {
    return res(ctx.json([spsLiteBackendModal]));
  })
);

function ModalComponent() {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Modals />
      </Provider>
    </div>
  );
}

export const Simple: Story = {
  render: () => <ModalComponent />,
};

Simple.parameters = {
  nextjs: {
    router: {
      query: {
        opened_popup: `hello-world`,
      },
    },
  },
};
