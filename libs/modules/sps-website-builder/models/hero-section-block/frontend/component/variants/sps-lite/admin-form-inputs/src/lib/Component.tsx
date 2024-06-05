"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { Component as HeroSectionsToButtonsArraysSpsLiteSelectRight } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-arrays-frontend-component-variants-sps-lite-select-right";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Component as HeroSectionBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-hero-section-blocks-to-sps-file-storage-widgets-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: props.data?.description ? JSON.parse(props.data?.description) : "",
    onUpdate: ({ editor }) => {
      const editorJson = editor?.getJSON();
      props.form.setValue("description", JSON.stringify(editorJson));
    },
  });

  return (
    <form
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`w-full ${props.className || "flex flex-col gap-6"}`}
    >
      {/* <div className="relative">
        {editor && (
          <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            className="p-2 bg-white rounded-lg flex gap-3"
          >
            <button
              onClick={(e) => {
                e.preventDefault();

                editor.chain().focus().toggleBold().run();
              }}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
              bold
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();

                editor.chain().focus().toggleItalic().run();
              }}
              className={editor.isActive("italic") ? "is-active" : ""}
            >
              italic
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();

                editor.chain().focus().toggleStrike().run();
              }}
              className={editor.isActive("strike") ? "is-active" : ""}
            >
              strike
            </button>
          </BubbleMenu>
        )}
        <EditorContent editor={editor} />
      </div> */}
      <FormField
        ui="shadcn"
        type="tiptap"
        label="Description"
        name="description"
        form={props.form}
        placeholder="Type description"
      />
      <FormField
        ui="shadcn"
        type="text"
        name="title"
        label="Title"
        form={props.form}
        placeholder="Type title"
      />
      <FormField
        ui="shadcn"
        type="select"
        label="Variant"
        name="variant"
        form={props.form}
        placeholder="Select variant"
        options={variants.map((variant) => [variant, variant])}
      />
      <ModelEntitiesListCard title="hero-section-block-to-buttons-arrays">
        <div className="flex flex-col gap-6">
          {props.data?.heroSectionBlocksToButtonsArrays.map((entity, index) => {
            return (
              <HeroSectionsToButtonsArraysSpsLiteSelectRight
                key={index}
                data={entity}
                isServer={props.isServer}
                variant="select-right"
              />
            );
          })}
          <HeroSectionsToButtonsArraysSpsLiteSelectRight
            isServer={props.isServer}
            variant="select-right"
            heroSectionBlockId={props.data?.id}
          />
        </div>
      </ModelEntitiesListCard>
      <ModelEntitiesListCard title="hero-section-block-to-sps-file-storage-widgets">
        <div className="flex flex-col gap-6">
          {props.data?.heroSectionBlocksToSpsFileStorageWidgets.map(
            (entity, index) => {
              return (
                <HeroSectionBlocksToSpsFileStorageWidgets
                  key={index}
                  data={entity}
                  isServer={props.isServer}
                  variant="select-right"
                />
              );
            },
          )}
          <HeroSectionBlocksToSpsFileStorageWidgets
            isServer={props.isServer}
            variant="select-right"
          />
        </div>
      </ModelEntitiesListCard>
    </form>
  );
}
