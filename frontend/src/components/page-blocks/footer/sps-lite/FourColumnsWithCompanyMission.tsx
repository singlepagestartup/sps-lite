"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ButtonsArrays from "~components/elements/buttons-arrays";
import { ISpsLiteFooterBlock } from ".";
import getFileUrl from "~utils/api/get-file-url";

export default function FourColumnsWithCompanyMission(
  props: ISpsLiteFooterBlock,
) {
  if (props.showSkeletons) {
    return (
      <footer
        data-component={props.__component}
        data-variant={props.variant}
        className={`${props.className || ""} bg-white`}
      >
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="space-y-8 xl:col-span-1">
              <div className="w-[200px] h-[50px] skeleton"></div>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0 lg:ml-auto">
              <div className="w-full flex flex-col gap-3">
                <div className="w-32 h-6 skeleton"></div>
                <div className="w-32 h-6 skeleton"></div>
                <div className="w-32 h-6 skeleton"></div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="w-32 h-6 skeleton"></div>
                <div className="w-32 h-6 skeleton"></div>
                <div className="w-32 h-6 skeleton"></div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="w-32 h-6 skeleton"></div>
                <div className="w-32 h-6 skeleton"></div>
                <div className="w-32 h-6 skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      data-component={props.__component}
      data-variant={props.variant}
      className={`${props.className || ""} bg-white`}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-4 w-full lg:w-3/12">
            {props.logotype?.media?.length ? (
              <Image
                src={getFileUrl(props.logotype.media[0])}
                alt=""
                className="object-contain object-left"
                width={200}
                height={200}
              />
            ) : null}
            <div className="lg:max-w-xs">
              {props.description ? (
                <ReactMarkdown className="text-xs text-gray-300">
                  {props.description}
                </ReactMarkdown>
              ) : null}
            </div>
            <div className="w-full flex gap-4">
              {props.extraButtonsArrays?.map((buttonsArray, index) => {
                return <ButtonsArrays key={index} {...buttonsArray} />;
              })}
            </div>
          </div>
          <div className="flex lg:justify-end w-full lg:w-9/12 gap-4">
            {props.buttonsArrays?.map((buttonsArray, index) => {
              return (
                <div key={index} className="w-6/12 lg:w-3/12">
                  <ButtonsArrays {...buttonsArray} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 lg:pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {props.copyrights ? (
            <ReactMarkdown className="text-sm text-gray-500">
              {props.copyrights}
            </ReactMarkdown>
          ) : null}
          {props.additionalButtonsArrays?.map((buttonsArray, index) => {
            return <ButtonsArrays key={index} {...buttonsArray} />;
          })}
        </div>
      </div>
    </footer>
  );
}
