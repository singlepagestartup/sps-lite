import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "../interface";
import { pageBlocks } from "../aliases";
import { ReduxProvider } from "../../../redux";
import {
  pageBlocks as spsEcommercePageBlocks,
  PageBlock as SpsEcommercePageBlock,
} from "@sps/sps-ecommerce-frontend";

export function Component(props: IComponentProps) {
  const key = props.__component;

  if (!key) {
    throw new Error(
      `PageBlock with props: "${JSON.stringify(props)}" is missing __component`,
    );
  }

  // problem with conflicting types in some constituents
  // that is why here is any
  const PageBlock: any = pageBlocks[key];
  if (typeof PageBlock == "function") {
    return (
      <ErrorBoundary>
        <ReduxProvider>
          <div
            data-component={props.__component}
            data-variant={props.variant}
            className={`${props.className || ""}`}
          >
            <PageBlock {...props} />
          </div>
        </ReduxProvider>
      </ErrorBoundary>
    );
  }

  const SpsEcommercePageBlockKey: any =
    spsEcommercePageBlocks[key as keyof typeof spsEcommercePageBlocks];

  if (typeof SpsEcommercePageBlockKey == "function") {
    return <SpsEcommercePageBlock {...(props as any)} />;
  }

  return (
    <div
      data-component={props.__component}
      data-variant={props.variant}
      className={`${props.className || ""}`}
    ></div>
  );
}
