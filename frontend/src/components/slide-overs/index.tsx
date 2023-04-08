import { useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import { ISpsLiteSlideOver, variants as spsStoreVariants } from "./sps-lite";
import { useGetSlideOversQuery } from "~redux/services/backend/models/slide-overs";

const variants = {
  ...spsStoreVariants,
};

export interface ISlideOver extends ISpsLiteSlideOver {}

export default function SlideOvers() {
  const router = useRouter();
  const { query } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [slideOverProps, setSlideOverProps] =
    useState<Omit<ISlideOver, `isOpen` | `setIsOpen`>>();

  const { data: slideOvers } = useGetSlideOversQuery({});

  useEffect(() => {
    if (!slideOvers) {
      return;
    }

    for (const slideOver of slideOvers) {
      if (query.opened_slide_over === slideOver.uid) {
        setSlideOverProps(slideOver);
      }
    }
  }, [slideOvers, query.opened_slide_over]);

  useEffect(() => {
    if (query.opened_slide_over && !isOpen) {
      setIsOpen(true);
    } else if (!query.opened_slide_over && isOpen) {
      setIsOpen(false);
    }
  }, [query]);

  const Comp = variants[
    slideOverProps?.variant as keyof typeof variants
  ] as FC<ISlideOver>;

  if (!Comp || !slideOverProps) {
    return <></>;
  }

  return <Comp {...slideOverProps} isOpen={isOpen} setIsOpen={setIsOpen} />;
}
