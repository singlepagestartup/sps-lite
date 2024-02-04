import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "../interface";
import { pageBlocks } from "../aliases";
import {
  pageBlocks as spsEcommercePageBlocks,
  PageBlock as SpsEcommercePageBlock,
} from "@sps/sps-ecommerce-frontend";
import {
  pageBlocks as spsCrmPageBlocks,
  PageBlock as SpsCrmPageBlock,
} from "@sps/sps-crm-frontend";
import {
  pageBlocks as spsSubscriptionPageBlocks,
  PageBlock as SpsSubscriptionPageBlock,
} from "@sps/sps-subscription-frontend";

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

  const SpsEcommerceTargetPageBlock: any =
    spsEcommercePageBlocks[key as keyof typeof spsEcommercePageBlocks];

  if (typeof SpsEcommerceTargetPageBlock == "function") {
    return <SpsEcommercePageBlock {...(props as any)} />;
  }

  const SpsCrmTargetPageBlock: any =
    spsCrmPageBlocks[key as keyof typeof spsCrmPageBlocks];

  if (typeof SpsCrmTargetPageBlock == "function") {
    return <SpsCrmPageBlock {...(props as any)} />;
  }

  const SpsSubscriptionTargetPageBlock: any =
    spsSubscriptionPageBlocks[key as keyof typeof spsSubscriptionPageBlocks];

  if (typeof SpsSubscriptionTargetPageBlock == "function") {
    return <SpsSubscriptionPageBlock {...(props as any)} />;
  }

  return (
    <div
      data-component={props.__component}
      data-variant={props.variant}
      className={`${props.className || ""}`}
    ></div>
  );
}
