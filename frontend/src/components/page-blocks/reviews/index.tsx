import utils from "@rogwild/next-utils";
import { FC, useMemo } from "react";
import { IProductsLists, IProduct, IReview, IReviewsBlock } from "types";
import { useGetReviewsQuery } from "~redux/services/backend/models/reviews";
import SimpleWithAvatars from "./SimpleWithAvatars";

const variants = {
  "simple-with-avatars": SimpleWithAvatars,
};

export default function Reviews(props: IReviewsBlock) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<{
    review: IReview;
  }>;
  const { data: reviews } = useGetReviewsQuery({});

  const passingReviews = useMemo(() => {
    if (props.reviews) {
      return props.reviews;
    }

    return reviews;
  }, [props.reviews, reviews]);

  // const hasAdditionalElements = useMemo(() => {
  //   return props.title || props.description || props.buttons.length;
  // }, [props]);

  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  if (!Comp) {
    return <></>;
  }

  return (
    <div className="bg-white mx-auto max-w-7xl my-6" {...additionalAttributes}>
      <div>
        <h2 className="sr-only">Customer Reviews</h2>

        <div className="">
          {passingReviews?.map((review, index) => (
            <Comp key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
