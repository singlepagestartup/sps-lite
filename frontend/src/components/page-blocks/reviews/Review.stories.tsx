import { Meta, StoryObj } from "@storybook/react";
import { rest, setupWorker } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { backendReview } from "~mocks/models";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Reviews, { IReviewsBlock } from ".";

const meta = { component: Reviews } satisfies Meta<typeof Reviews>;
export default meta;

type Story = StoryObj<typeof meta>;

const reviewsProps = {
  id: 9,
  variant: `simple-with-avatars`,
} as IReviewsBlock;

const worker = setupWorker(
  rest.get(`${BACKEND_URL}/api/reviews`, (req, res, ctx) => {
    return res(ctx.json(Array(5).fill(backendReview)));
  })
);

export const SimpleCentered = {
  render: () => <ReviewsComponent />,
};

function ReviewsComponent() {
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
