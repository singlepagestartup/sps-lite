import { IComponentPropsExtended } from "./interface";
import Server from "./server";
import { ReduxProvider } from "@sps/sps-website-builder-models-page-frontend-redux";
import { headers } from "next/headers";
import QueryString from "qs";
import { Component as IsAuthenticatatedWrapper } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-is-authenticatated-wrapper";

export function Component(props: IComponentPropsExtended) {
  const headersList = headers();
  const query = headersList.get("x-sps-website-builder-query") || "";
  const parsedQuery = QueryString.parse(query);

  const Comp: any = Server;

  if (parsedQuery?.admin !== "true") {
    return <></>;
  }

  return (
    <IsAuthenticatatedWrapper
      variant="is-authenticatated-wrapper"
      isServer={props.isServer}
      hostUrl={props.hostUrl}
    >
      <ReduxProvider>
        <Comp {...props} />
      </ReduxProvider>
    </IsAuthenticatatedWrapper>
  );
}
