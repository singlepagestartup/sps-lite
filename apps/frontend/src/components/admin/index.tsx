import { IComponentPropsExtended } from "./interface";
import Server from "./server";
import { ReduxProvider } from "@sps/sps-website-builder-models-page-frontend-redux";
import { headers } from "next/headers";
import QueryString from "qs";

export function Component(props: IComponentPropsExtended) {
  const headersList = headers();
  const query = headersList.get("x-sps-website-builder-query") || "";
  const parsedQuery = QueryString.parse(query);

  const Comp = Server;

  if (parsedQuery?.admin !== "true") {
    return <></>;
  }

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
