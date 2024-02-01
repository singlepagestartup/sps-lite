"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as slideOverApi } from "../api";
import { useParams, useSearchParams } from "next/navigation";
import type { IEntity as IBackendSlideOver } from "@sps/sps-website-builder-contracts-extended/lib/entities/slide-over/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { getTargetPage } from "@sps/utils";

export interface ISlideOver extends IBackendSlideOver {
  showSkeletons?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  page?: IBackendPage;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Entity() {
  const params = useParams();
  const query = useSearchParams();
  const openedSlideOver = query?.get("opened_slide_over");
  const [isOpen, setIsOpen] = useState(false);
  const [slideOverProps, setSlideOverProps] =
    useState<Omit<ISlideOver, "isOpen" | "setIsOpen">>();

  const { data: slideOvers } = slideOverApi.useGetQuery({
    locale: "all",
  });

  const [page, setPage] = useState<IBackendPage>(); //?

  useEffect(() => {
    if (params) {
      getTargetPage(params).then((res) => {
        setPage(res);
      });
    }
  }, [JSON.stringify(params)]);

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

  if (!Comp || !slideOverProps || !page) {
    return <></>;
  }

  return (
    <Comp
      {...slideOverProps}
      page={page}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}
