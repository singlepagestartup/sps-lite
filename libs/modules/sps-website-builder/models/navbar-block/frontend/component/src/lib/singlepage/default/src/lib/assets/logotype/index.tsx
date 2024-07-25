import { IComponentPropsExtended } from "../../interface";
import { Component as NavbarBlocksToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="w-fit">
      <NavbarBlocksToLogotypes
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
              <NavbarBlocksToLogotypes
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              />
            );
          });
        }}
      </NavbarBlocksToLogotypes>
    </div>
  );
}
