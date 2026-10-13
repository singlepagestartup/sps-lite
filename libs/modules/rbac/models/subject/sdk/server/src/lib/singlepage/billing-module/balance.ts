import { serverHost, route } from "@sps/rbac/models/subject/sdk/model";
import { type NextRequestOptions, responsePipe } from "@sps/shared-utils";

export interface IProps {
  id: string;
  host?: string;
  options?: Partial<NextRequestOptions>;
}
export interface IResult {
  amount: string;
  currencyId: string | null;
}

export async function action(props: IProps): Promise<IResult> {
  const headers = new Headers(props.options?.headers);
  headers.set("Cache-Control", "no-store");
  const res = await fetch(
    `${props.host || serverHost}${route}/${props.id}/billing-module/balance`,
    {
      ...props.options,
      headers,
      credentials: "include",
      method: "GET",
    },
  );
  const result = await responsePipe<{ data: IResult }>({ res });
  if (!result) throw new Error("Balance response is unavailable");
  return result.data;
}
