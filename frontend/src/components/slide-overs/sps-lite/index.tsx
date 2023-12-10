import { Dispatch, FC, SetStateAction } from "react";
import RightSideHalfWidth from "./RightSideHalfWidth";
import { ISpsLiteBackendApiSlideOver } from "~redux/services/backend/api/slide-over/interfaces/sps-lite";

export interface ISpsLiteSlideOver extends ISpsLiteBackendApiSlideOver {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  showSkeletons?: boolean;
}

export const variants = {
  "right-side-half-width": RightSideHalfWidth,
};

export default function Pricings(props: ISpsLiteSlideOver) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteSlideOver>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
