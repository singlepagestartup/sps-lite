import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Tier } from "@sps/sps-subscription-models-tier-frontend-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.tiers-list-block"
      data-variant={props.variant}
      className="bg-gray-900"
    >
      <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
        <div>
          <Image
            className=""
            src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
            alt=""
            fill={true}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {props.data.subtitle ? (
              <h2 className="text-lg font-semibold leading-8 text-indigo-400">
                <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
              </h2>
            ) : null}
            {props.data.title ? (
              <ReactMarkdown className="mt-2 text-4xl font-bold tracking-tight text-white">
                {props.data.title}
              </ReactMarkdown>
            ) : null}
            {props.data.description ? (
              <ReactMarkdown className="mt-6 text-lg leading-8 text-white/60">
                {props.data.description}
              </ReactMarkdown>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flow-root bg-white pb-32 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <Tier isServer={props.isServer} variant="list" />
          </div>
        </div>
      </div>
    </div>
  );
}
