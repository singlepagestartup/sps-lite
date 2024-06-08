import { IComponentPropsExtended } from "./interface";
import Server from "./server";
// import { ReduxProvider } from "@sps/sps-website-builder-models-page-frontend-redux";
import { headers } from "next/headers";
import QueryString from "qs";
// import { App } from "@sps/startup-frontend";

export function Component(props: IComponentPropsExtended) {
  const headersList = headers();
  const query = headersList.get("x-sps-website-builder-query") || "";
  const parsedQuery = QueryString.parse(query);

  const Comp = Server;

  if (parsedQuery?.admin !== "true") {
    return <></>;
  }

  return <Comp {...props} />;
  // return (
  //   <ReduxProvider>
  //     <Comp {...props} />
  //     <App isServer={false} widgetId="1" variant="default" />
  //   </ReduxProvider>
  // );
}
