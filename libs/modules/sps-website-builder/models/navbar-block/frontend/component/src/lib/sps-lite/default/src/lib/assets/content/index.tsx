import { IComponentPropsExtended } from "../../interface";
import { Component as NavbarBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex flex-col lg:flex-row w-full px-2 lg:px-0 items-center justify-between gap-2">
      <NavbarBlocksToButtonsArrays
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "navbarBlockId",
                  method: "eq",
                  value: props.data.id,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <NavbarBlocksToButtonsArrays
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              />
            );
          });
        }}
      </NavbarBlocksToButtonsArrays>
      {/* <div className="flex w-full flex-col lg:flex-row items-center gap-2">
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
      <div className="flex flex-col lg:flex-row gap-2 items-center">
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
      </div> */}
    </div>
  );
}
