import { Meta, StoryObj } from "@storybook/react";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import ReviewsTables, { ISpsLiteReviewsTableBlock } from ".";
import Reviews from "..";
import { spsLiteBackendReviewsTableBlockSimple } from "~mocks/components/page-blocks/sps-lite";
import { spsLiteBackendReview } from "~mocks/collection-types/sps-lite";

const meta = { component: ReviewsTables } satisfies Meta<typeof ReviewsTables>;
export default meta;

type Story = StoryObj<typeof meta>;

const server = setupServer(
  http.get(`${BACKEND_URL}/api/reviews`, ({ request }) => {
    return HttpResponse.json(Array(5).fill(spsLiteBackendReview));
  }),
);

export const Simple: Story = {
  render: (args) => <ReviewsTableComponent {...args} />,
  args: spsLiteBackendReviewsTableBlockSimple,
};

function ReviewsTableComponent(args: ISpsLiteReviewsTableBlock) {
  useEffect(() => {
    server.listen();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Reviews {...args} />
      </Provider>
    </div>
  );
}
