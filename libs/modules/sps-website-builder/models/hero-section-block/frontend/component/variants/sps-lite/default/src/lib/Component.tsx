"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as HeroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-arrays-frontend-component";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function Component(props: IComponentPropsExtended) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: props.data?.description ? JSON.parse(props.data?.description) : "",
    editable: false,
  });

  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`${props.data.className || "px-2 py-20 lg:py-32"} w-full`}
    >
      <div className="w-full mx-auto max-w-7xl">
        {props.data?.title ? (
          <h1 className="text-4xl font-bold tracking-tight xl:inline text-gray-900 sm:text-5xl md:text-6xl">
            <ReactMarkdown>{props.data?.title}</ReactMarkdown>
          </h1>
        ) : null}
        {editor ? <EditorContent editor={editor} className="prose" /> : null}
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
