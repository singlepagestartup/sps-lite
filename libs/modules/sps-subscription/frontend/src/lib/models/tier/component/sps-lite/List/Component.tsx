"use client";

import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getFileUrl } from "@sps/utils";
import { IComponentPropsExtended } from "../../interface";
import Link from "next/link";

export function Component<T extends { variant: "list" }>(
  props: IComponentPropsExtended<T>,
) {
  console.log(`🚀 ~ props:`, props);
  // console.log(`🚀 ~ Tier ~ globalStoreApis:`, globalStoreApis);
  // const price = useMemo(() => {
  //   if (!item.attributes) {
  //     return;
  //   }

  //   const priceAttribute = item.attributes.find(
  //     (attribute) => attribute.attributeKey?.key === "price",
  //   );

  //   if (!priceAttribute || !priceAttribute.attributeKey?.type) {
  //     return;
  //   }

  //   return `${priceAttribute.currency?.unicode || ""}${
  //     priceAttribute[priceAttribute.attributeKey?.type]
  //   }`;
  // }, [item]);

  return (
    <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
      <p className="text-2xl font-bold">Tier - List</p>
    </div>
  );
}
