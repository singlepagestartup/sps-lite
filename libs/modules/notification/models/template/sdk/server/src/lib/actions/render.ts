import {
  host,
  route,
  IModel,
} from "@sps/notification/models/template/sdk/model";
import {
  NextRequestOptions,
  prepareFormDataToSend,
  responsePipe,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";

export interface IActionProps {
  id: string;
  tag?: string;
  revalidate?: number;
  params?: {
    [key: string]: any;
  };
  options?: Partial<NextRequestOptions>;
  data?: any;
}

export async function action(props: IActionProps): Promise<string> {
  const { id, params, data, options } = props;

  const formData = prepareFormDataToSend({ data });

  const stringifiedQuery = QueryString.stringify(params, {
    encodeValuesOnly: true,
  });

  const requestOptions: NextRequestOptions = {
    credentials: "include",
    method: "POST",
    body: formData,
    ...options,
    next: {
      ...options?.next,
    },
  };

  const res = await fetch(
    `${host}${route}/${id}/render?${stringifiedQuery}`,
    requestOptions,
  );

  const json = await responsePipe<{
    data: string;
  }>({
    res,
  });

  const transformedData = transformResponseItem<string>(json);

  return transformedData;
}
