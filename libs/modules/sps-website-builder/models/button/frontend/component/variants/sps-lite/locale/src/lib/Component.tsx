import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Button } from "@sps/ui-adapter";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <Button
      ui="sps"
      data-module="sps-website-builder"
      data-model="elements.button"
      data-variant={props.variant}
      data-ui-variant="ghost"
      className={`${props.data.className || "w-full"}`}
      {...(props.data.url ? { url: props.data.url } : {})}
      {...(props.onClick ? { onClick: props.onClick } : {})}
    >
      <div className="button-container">
        {props.data.media ? (
          <div
            className="media-container"
            data-has-hover={props.data.media?.length > 1}
          >
            {props.data.media.length ? (
              <File
                isServer={props.isServer}
                variant="image"
                data={props.data.media[0]}
                containerClassName="default-media-container"
                className="image"
              />
            ) : null}
            {props.data.media.length > 1 ? (
              <File
                isServer={props.isServer}
                variant="image"
                data={props.data.media[1]}
                containerClassName="hover-media-container"
                className="image"
              />
            ) : null}
          </div>
        ) : null}
        {props.data.title}
        {props.data.additionalMedia ? (
          <div
            className="media-container"
            data-has-hover={props.data.additionalMedia?.length > 1}
          >
            {props.data.additionalMedia.length ? (
              <File
                isServer={props.isServer}
                variant="image"
                data={props.data.additionalMedia[0]}
                containerClassName="default-additional-media-container"
                className="image"
              />
            ) : null}
            {props.data.additionalMedia.length > 1 ? (
              <File
                isServer={props.isServer}
                variant="image"
                data={props.data.additionalMedia[1]}
                containerClassName="hover-additional-media-container"
                className="image"
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </Button>
  );
}
