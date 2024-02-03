import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "../interface";
import { pageBlocks } from "../aliases";

export function Component(props: IComponentPropsExtended) {
  const key = props.__component;

  if (!key) {
    throw new Error(
      `PageBlock with props: "${JSON.stringify(props)}" is missing __component`,
    );
  }

  // problem with conflicting types in some constituents
  // that is why here is any
  const PageBlock: any = pageBlocks[key];

  if (typeof PageBlock !== "function") {
    // throw new Error(`PageBlock ${key} is not a function`);
    return (
      <div
        data-component={props.__component}
        data-variant={props.variant}
        className={`${props.className || ""}`}
      ></div>
    );
  }

  return (
    <ErrorBoundary>
      <div
        data-component={props.__component}
        data-variant={props.variant}
        className={`${props.className || ""}`}
      >
        <PageBlock {...props} isServer={props.isServer} />
      </div>
    </ErrorBoundary>
  );
}
