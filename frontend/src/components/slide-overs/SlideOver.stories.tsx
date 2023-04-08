import { Meta, StoryObj } from "@storybook/react";
import SlideOvers from ".";
import { spsLiteBackendSlideOverSimpleRight } from "~mocks/collection-types/sps-lite";
import { rest, setupWorker } from "msw";
import { BACKEND_URL } from "~utils/envs";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";

const meta = { component: SlideOvers } satisfies Meta<typeof SlideOvers>;
export default meta;

type Story = StoryObj<typeof meta>;

const worker = setupWorker(
  rest.get(`${BACKEND_URL}/api/slide-overs`, (req, res, ctx) => {
    return res(ctx.json([spsLiteBackendSlideOverSimpleRight]));
  })
);

function SlideOverComponent() {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <SlideOvers />
      </Provider>
    </div>
  );
}

export const Simple: Story = {
  render: () => <SlideOverComponent />,
};

Simple.parameters = {
  nextjs: {
    router: {
      query: {
        opened_slide_over: spsLiteBackendSlideOverSimpleRight.uid,
      },
    },
  },
};
