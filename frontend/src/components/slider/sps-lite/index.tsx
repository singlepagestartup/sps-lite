import { FC } from "react";
import { ISlider } from "..";
import FadeWithPreviews from "./FadeWithPreviews";

export type ISpsLiteSliderBlock = ISlider;

export const variants = {
  "fade-with-previews": FadeWithPreviews,
};

// export default function Reviews(props: ISpsLiteSliderBlock) {
//   const Comp = variants[
//     props.variant as keyof typeof variants
//   ] as FC<ISpsLiteSliderBlock>;

//   if (!Comp) {
//     return <></>;
//   }

//   return <Comp {...props} />;
// }
