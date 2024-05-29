import { IComponentPropsExtended } from "./interface";
import { Component as SlidesToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-slides-to-sps-file-storage-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements"
      data-variant="default"
      className="w-full"
    >
      <div className="relative min-h-80">
        {props.data.slidesToSpsFileStorageWidgets.map((entity, index) => {
          return (
            <SlidesToSpsFileStorageWidgets
              key={index}
              isServer={props.isServer}
              variant="default"
              data={entity}
            />
          );
        })}

        <div className="relative p-10">
          <p className="font-bold text-xl relative">{props.data.title}</p>
        </div>

        {/* {props.data.media?.length ? (
          <File
            isServer={false}
            variant="image"
            data={props.data.media[0]}
            containerClassName="w-full h-full"
            className="object-cover w-full h-full"
          />
        ) : null} */}
        {/* {props.data.showBackdrop ? <div className="backdrop"></div> : null} */}
        {/* <div className="content–container">
          <div className="content">
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
            <div className="buttons-container">
              {props.data.buttons?.map((button, index: number) => {
                return <Button isServer={false} key={index} {...button} />;
              })}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
