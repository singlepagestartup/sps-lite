import { Meta, StoryObj } from "@storybook/react";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "~redux/index";
import { BACKEND_URL } from "~utils/envs";
import ReviewsLists, { ISpsLiteReviewsListBlock } from ".";
import { spsLiteBackendReviewsListBlockSimpleWithAvatars } from "~mocks/components/page-blocks/sps-lite";
import { spsLiteBackendReview } from "~mocks/collection-types/sps-lite";
import Reviews from "./index";

const meta = { component: Reviews } satisfies Meta<typeof Reviews>;
export default meta;

type Story = StoryObj<typeof meta>;

const server = setupServer(
  http.get(`${BACKEND_URL}/api/reviews`, ({ request }) => {
    return HttpResponse.json(Array(5).fill(spsLiteBackendReview));
  }),
);

export const SimpleCentered: Story = {
  render: (args) => <ReviewsListsComponent {...args} />,
  args: spsLiteBackendReviewsListBlockSimpleWithAvatars,
};

function ReviewsListsComponent(args: ISpsLiteReviewsListBlock) {
  useEffect(() => {
    server.listen();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Provider store={store}>
        <ReviewsLists {...args} />
      </Provider>
    </div>
  );
}
