import { serverHost, route } from "@sps/rbac/models/subject/sdk/model";
import type { IModel } from "@sps/social/models/profile/sdk/model";
import {
  type NextRequestOptions,
  responsePipe,
  transformResponseItem,
} from "@sps/shared-utils";
export interface IProps {
  id: string;
  socialModuleProfileId: string;
  host?: string;
  options?: Partial<NextRequestOptions>;
  data: {
    title?: Record<string, string>;
    subtitle?: Record<string, string>;
    description?: Record<string, string>;
    slug?: string;
  };
}
export type IResult = IModel;
export async function action(props: IProps): Promise<IResult> {
  const res = await fetch(
    `${props.host || serverHost}${route}/${props.id}/social-module/profiles/${props.socialModuleProfileId}`,
    {
      ...props.options,
      credentials: "include",
      method: "PATCH",
      headers: {
        ...props.options?.headers,
        "content-type": "application/json",
      },
      body: JSON.stringify({ data: props.data }),
    },
  );
  return transformResponseItem<IResult>(
    await responsePipe<{ data: IResult }>({ res }),
  );
}
