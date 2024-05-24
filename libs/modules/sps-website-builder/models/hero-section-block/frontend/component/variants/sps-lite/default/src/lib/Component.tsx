import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as HeroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-arrays-frontend-component";
import { Component as HeroSectionBlocksToFiles } from "@sps/sps-website-builder-relations-hero-section-blocks-to-files-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`${props.data.className || "px-2 py-20 lg:py-32"} w-full`}
    >
      <div className="w-full mx-auto max-w-7xl">
        {props.data.heroSectionBlocksToFiles.map(
          (heroSectionBlocksToFile, index) => {
            return (
              <HeroSectionBlocksToFiles
                key={index}
                isServer={props.isServer}
                data={heroSectionBlocksToFile}
                variant="default"
              />
            );
          },
        )}
        {props.data?.title ? (
          <h1 className="text-4xl font-bold tracking-tight xl:inline text-gray-900 sm:text-5xl md:text-6xl">
            <ReactMarkdown>{props.data?.title}</ReactMarkdown>
          </h1>
        ) : null}
        {props.data?.description ? (
          <ReactMarkdown className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            {props.data?.description}
          </ReactMarkdown>
        ) : null}
        <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
          {props.data.heroSectionBlocksToButtonsArrays.map((entity, index) => {
            return (
              <HeroSectionBlocksToButtonsArrays
                key={index}
                isServer={props.isServer}
                data={entity}
                variant="default"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
