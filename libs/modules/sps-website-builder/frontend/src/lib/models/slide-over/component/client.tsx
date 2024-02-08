"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "../api/client";
import { variants } from "./variants";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import type { IModel as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/models/page/interfaces";
import { getTargetPage } from "@sps/utils";
import { IModelExtended } from "../model";

// default is required for dynamic import
export default function Client(props: IComponentProps) {
  const params = useParams();
  const query = useSearchParams();
  const openedSlideOver = query?.get("opened_slide_over");
  const [isOpen, setIsOpen] = useState(false);
  const [slideOverProps, setSlideOverProps] = useState<IModelExtended>();

  const { data } = api.useGetQuery({
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
    if (!data) {
      return;
    }

    for (const slideOver of data) {
      if (openedSlideOver === slideOver.uid) {
        setSlideOverProps(slideOver);
      }
    }
  }, [data, openedSlideOver]);

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
      {...props}
      {...slideOverProps}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}
