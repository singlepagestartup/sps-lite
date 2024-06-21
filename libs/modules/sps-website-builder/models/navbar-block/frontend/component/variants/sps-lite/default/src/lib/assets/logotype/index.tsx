import { IComponentPropsExtended } from "../../interface";
import { Component as NavbarsToLogotypes } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
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
  );
}
