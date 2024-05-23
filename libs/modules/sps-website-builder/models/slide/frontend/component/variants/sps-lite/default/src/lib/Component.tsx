import { IComponentPropsExtended } from "./interface";
import { Component as WidgetsToSlidesSpsLiteReverse } from "@sps/sps-website-builder-relations-widgets-to-slides-frontend-component-variants-sps-lite-reverse";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements"
      data-variant="default"
      className="slide"
    >
      <div className="slide-container relative min-h-80">
        {props.data.widgetsToSlides.map((entity, index) => {
          return (
            <div key={index} className="absolute inset-0 object-cover">
              <WidgetsToSlidesSpsLiteReverse
                isServer={props.isServer}
                variant="reverse"
                data={entity}
              />
            </div>
          );
        })}

        <div className="relative p-10">
          <p className="font-bold text-xl relative">Slide {props.data.id}</p>
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
