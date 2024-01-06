import { Meta, StoryObj } from "@storybook/react";
import { HttpResponse, http } from "msw";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import { entity } from "~redux/services/backend/components/page-blocks/reviews-list-block/mock/sps-lite";
import { entity as review } from "~redux/services/backend/extensions/sps-crm/api/review/mock/sps-lite";
import Root from ".";
import { IPageBlock } from "../..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  render: (args) => <ReviewsListsComponent {...args} />,
  args: { ...entity },
  parameters: {
    msw: {
      handlers: [
        http.get(`${BACKEND_URL}/api/reviews`, ({ request }) => {
          return HttpResponse.json(Array(5).fill(review));
        }),
      ],
    },
  },
};

function ReviewsListsComponent(args: IPageBlock) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Root {...args} />
      </Provider>
    </div>
  );
}
