import { Meta, StoryObj } from "@storybook/react";
import { HttpResponse, http } from "msw";
import { Provider } from "react-redux";
import store from "../../../../../redux";
import { BACKEND_URL } from "@sps/utils";
import Root from ".";
import { entity } from "@sps/sps-website-builder-frontend/lib/redux/components/page-blocks/reviews-table-block/mock/sps-lite";
import { entity as review } from "@sps/sps-crm-frontend/lib/redux/entities/review/mock/sps-lite";
import { IPageBlock } from "../..";

const meta = { component: Root } satisfies Meta<typeof Root>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  render: (args) => <ReviewsTableComponent {...args} />,
  args: { ...entity },
  parameters: {
    msw: {
      handlers: [
        http.get(`${BACKEND_URL}/api/reviews`, ({ request }) => {
          return HttpResponse.json({
            data: Array(5).fill(review),
          });
        }),
      ],
    },
  },
};

function ReviewsTableComponent(args: IPageBlock) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Root {...args} />
      </Provider>
    </div>
  );
}