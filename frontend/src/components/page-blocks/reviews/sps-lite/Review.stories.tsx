import { Meta, StoryObj } from "@storybook/react";
import { rest, setupWorker } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import Reviews, { IReviewsBlock } from "..";
import { backendReview } from "~mocks/collection-types";
import { backendReviewsBlockSimpleWithAvatars } from "~mocks/components/page-blocks";

const meta = { component: Reviews } satisfies Meta<typeof Reviews>;
export default meta;

type Story = StoryObj<typeof meta>;

const worker = setupWorker(
  rest.get(`${BACKEND_URL}/api/reviews`, (req, res, ctx) => {
    return res(ctx.json(Array(5).fill(backendReview)));
  })
);

export const SimpleCentered: Story = {
  render: (args) => <ReviewsComponent {...args} />,
  args: backendReviewsBlockSimpleWithAvatars,
};

function ReviewsComponent(args: IReviewsBlock) {
  useEffect(() => {
    worker.start();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <Reviews {...args} />
      </Provider>
    </div>
  );
}
