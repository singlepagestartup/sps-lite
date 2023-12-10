import { Meta, StoryObj } from "@storybook/react";
import { HttpResponse, http } from "msw";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import ReviewsTables, { ISpsLiteReviewsTableBlock } from ".";
import Reviews from "..";
import { entity } from "~redux/services/backend/components/page-blocks/reviews-table-block/mock/sps-lite";
import { entity as review } from "~redux/services/backend/api/review/mock/sps-lite";

const meta = { component: ReviewsTables } satisfies Meta<typeof ReviewsTables>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: (args) => <ReviewsTableComponent {...args} />,
  args: { ...entity, variant: "simple" },
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

function ReviewsTableComponent(args: ISpsLiteReviewsTableBlock) {
  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Reviews {...args} />
      </Provider>
    </div>
  );
}
