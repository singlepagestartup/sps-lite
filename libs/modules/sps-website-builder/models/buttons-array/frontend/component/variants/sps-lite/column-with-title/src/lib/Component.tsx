import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import Image from "next/image";
import { getFileUrl } from "@sps/shared-utils";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.buttons-array"
      data-variant={props.data.variant}
      className={props.data?.className || ""}
    >
      <div className="buttons-array-column-with-title">
        {props.data.title ? (
          <div className="buttons-array-title">
            {props.data.media?.length ? (
              <div className="icon-container">
                <Image
                  src={getFileUrl(props.data.media[0])}
                  alt=""
                  fill={true}
                />
              </div>
            ) : null}
            {props.data.title}
          </div>
        ) : null}

        <div className="buttons-array-buttons-container">
          {props.data.buttons?.map((button, index) => {
            return (
              <Button
                isServer={props.isServer}
                key={index}
                variant={button.variant}
                data={button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
