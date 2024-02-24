import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements"
      data-variant="default"
      className="slide"
    >
      <div className="slide-container">
        {props.data.media?.length ? (
          <File
            isServer={false}
            variant="image"
            data={props.data.media[0]}
            containerClassName="w-full h-full"
            className="object-cover w-full h-full"
          />
        ) : null}
        {props.data.showBackdrop ? <div className="backdrop"></div> : null}
        <div className="content–container">
          <div className="content">
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
            <div className="buttons-container">
              {/* {props.data.buttons?.map((button, index: number) => {
                return <Button isServer={false} key={index} {...button} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
