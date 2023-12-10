import { Meta, StoryObj } from "@storybook/react";
import SlideOvers from ".";
import { entity } from "~redux/services/backend/api/slide-over/mock/sps-lite";
import { HttpResponse, http } from "msw";
import { BACKEND_URL } from "~utils/envs";
import { Provider } from "react-redux";
import store from "~redux/index";

const meta = { component: SlideOvers } satisfies Meta<typeof SlideOvers>;
export default meta;

type Story = StoryObj<typeof meta>;

function SlideOverComponent() {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <SlideOvers />
      </Provider>
    </div>
  );
}

export const RightSideHalfWidth: Story = {
  render: () => <SlideOverComponent />,
};

RightSideHalfWidth.parameters = {
  nextjs: {
    appDirectory: true,
    router: {
      query: {
        opened_slide_over: entity.uid,
      },
    },
  },
  msw: {
    handlers: [
      http.get(`${BACKEND_URL}/api/slide-overs`, ({ request }) => {
        return HttpResponse.json({
          data: [entity],
        });
      }),
    ],
  },
};
