"use client";

import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getFileUrl } from "@sps/utils";
import { IComponentPropsExtended } from "./interface";
import { Component as Attribute } from "../../../../attribute/component";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
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
      <div className="p-8 sm:p-10">
        <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
          {props.data.title}
        </h3>
        <div className="mt-4 flex items-baseline">
          {props.data.attributes?.map((attribute, index) => {
            return (
              <Attribute
                key={index}
                isServer={false}
                variant="price"
                data={attribute}
              />
            );
          })}
          {props?.data.period ? (
            <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
              /mo
            </span>
          ) : null}
        </div>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {props.data.description}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-2">
        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
          <ul role="list" className="space-y-6">
            {props.data.attributes?.map((attribute, index) => {
              return (
                <Attribute
                  key={index}
                  isServer={false}
                  variant="feature"
                  data={attribute}
                />
              );
            })}
            {/* {item.features?.map((feature: any, fIndex: number) => (
              <li key={fIndex} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckIcon
                    className="h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  {feature.title}
                </p>
              </li>
            ))} */}
          </ul>
          {/* <div className="mt-8">
            {props.buttons?.map((button, index) => {
              return <Button key={index} isServer={false} {...button} />;
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}
