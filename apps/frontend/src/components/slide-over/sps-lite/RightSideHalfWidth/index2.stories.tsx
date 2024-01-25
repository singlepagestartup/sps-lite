import { Meta, StoryObj } from "@storybook/react";
import Root from "../..";
import { entity } from "@sps/sps-website-builder-frontend/lib/redux/entities/slide-over/mock/sps-lite";
import { HttpResponse, http } from "msw";
import { BACKEND_URL } from "@sps/utils";
import { Provider } from "react-redux";
import store from "../../../../redux";

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
