import { IComponentPropsExtended } from "../../interface";
import { Component as NavbarsToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/frontend/component/root";
import { Component as NavbarsToButtonsArrays } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex w-full justify-between">
      <div className="hidden lg:flex w-full px-2 lg:px-0 items-center justify-between">
        <div className="flex w-full items-center h-16">
          <div className="w-fit">
            {props.data.navbarBlocksToLogotypes.map((entity, index) => {
              return (
                <NavbarsToLogotypes
                  key={index}
                  variant="default"
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  data={entity}
                />
              );
            })}
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:space-x-2 items-center">
            {props.data.navbarBlocksToButtonsArrays
              .filter((entity) => entity.position === "default")
              .map((entity, index) => {
                return (
                  <NavbarsToButtonsArrays
                    key={index}
                    variant="default"
                    data={entity}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                  />
                );
              })}
          </div>
        </div>
        <div className="hidden lg:ml-6 lg:flex lg:space-x-2 items-center">
          {props.data.navbarBlocksToButtonsArrays
            .filter((entity) => entity.position === "additional")
            .map((entity, index) => {
              return (
                <NavbarsToButtonsArrays
                  key={index}
                  variant="default"
                  data={entity}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                />
              );
            })}
        </div>
      </div>
      <div className="flex flex-col lg:hidden gap-3 px-2 ">
        {props.data.navbarBlocksToButtonsArrays.map((entity, index) => {
          return (
            <NavbarsToButtonsArrays
              key={index}
              variant="default"
              data={entity}
              isServer={props.isServer}
              hostUrl={props.hostUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
