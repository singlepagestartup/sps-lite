import { Meta, StoryObj } from "@storybook/react";
import Root from "../..";
import { entity } from "~redux/services/backend/extensions/sps-website-builder/api/slide-over/mock/sps-lite";
import { HttpResponse, http } from "msw";
import { BACKEND_URL } from "~utils/envs";
import { Provider } from "react-redux";
import store from "~redux/index";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

function SlideOverComponent() {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Root />
      </Provider>
    </div>
  );
}

export const Index: Story = {
  render: () => <SlideOverComponent />,
};

Index.parameters = {
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
