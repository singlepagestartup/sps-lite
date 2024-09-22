import { host, route, IModel } from "@sps/file-storage/models/file/sdk/model";
import {
  NextRequestOptions,
  prepareFormDataToSend,
  responsePipe,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";

export interface IActionProps {
  tag?: string;
  revalidate?: number;
  params?: {
    [key: string]: any;
  };
  options?: Partial<NextRequestOptions>;
  data: {
    url: string;
  };
}

export async function action(props: IActionProps): Promise<IModel> {
  const { params, data, options } = props;

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
    `${host}${route}/create-from-url?${stringifiedQuery}`,
    requestOptions,
  );

  const json = await responsePipe<{ data: IModel }>({
    res,
  });

  const transformedData = transformResponseItem<IModel>(json);

  return transformedData;
}
