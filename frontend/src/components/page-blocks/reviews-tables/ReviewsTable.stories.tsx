import { Meta, StoryObj } from "@storybook/react";
import { rest, setupWorker } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { backendReview } from "~mocks/models";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import ReviewsTables from ".";
import Reviews, { IReviewsTableBlock } from ".";

const meta = { component: ReviewsTables } satisfies Meta<typeof ReviewsTables>;
export default meta;

type Story = StoryObj<typeof meta>;

const reviewsProps = {
  id: 9,
  variant: `simple`,
} as IReviewsTableBlock;

const worker = setupWorker(
  rest.get(`${BACKEND_URL}/api/reviews`, (req, res, ctx) => {
    return res(ctx.json(Array(5).fill(backendReview)));
  })
);

export const Simple = {
  render: () => <ReviewsTableComponent />,
};

function ReviewsTableComponent() {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Reviews {...reviewsProps} />
      </Provider>
    </div>
  );
}
