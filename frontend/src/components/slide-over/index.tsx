"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as slideOverApi } from "~redux/services/backend/extensions/sps-website-builder/api/slide-over/api";
import { useSearchParams } from "next/navigation";
import { IEntity as IBackendSlideOver } from "~redux/services/backend/extensions/sps-website-builder/api/slide-over/interfaces";

export interface ISlideOver extends IBackendSlideOver {
  showSkeletons?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function SlideOver() {
  const query = useSearchParams();
  const openedSlideOver = query?.get("opened_slide_over");
  const [isOpen, setIsOpen] = useState(false);
  const [slideOverProps, setSlideOverProps] =
    useState<Omit<ISlideOver, "isOpen" | "setIsOpen">>();

  const { data: slideOvers } = slideOverApi.useGetQuery({
    locale: "all",
  });

  useEffect(() => {
    if (!slideOvers) {
      return;
    }

    for (const slideOver of slideOvers) {
      if (openedSlideOver === slideOver.uid) {
        setSlideOverProps(slideOver);
      }
    }
  }, [slideOvers, openedSlideOver]);

  useEffect(() => {
    if (openedSlideOver && !isOpen) {
      setIsOpen(true);
    } else if (!openedSlideOver && isOpen) {
      setIsOpen(false);
    }
  }, [query]);

  const Comp = variants[slideOverProps?.variant as keyof typeof variants];

  if (!Comp || !slideOverProps) {
    return <></>;
  }

  return <Comp {...slideOverProps} isOpen={isOpen} setIsOpen={setIsOpen} />;
}
