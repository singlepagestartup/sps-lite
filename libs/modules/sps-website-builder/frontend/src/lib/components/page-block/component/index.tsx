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
  const PageBlock: any = pageBlocks[key as keyof typeof pageBlocks];
  if (typeof PageBlock == "function") {
    return (
      <ErrorBoundary>
        <div
          data-component={props.__component}
          data-variant={props.variant}
          className={`${props.className || ""}`}
        >
          <PageBlock {...props} />
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <div
      data-component={props.__component}
      data-variant={props.variant}
      className={`${props.className || ""}`}
    ></div>
  );
}
