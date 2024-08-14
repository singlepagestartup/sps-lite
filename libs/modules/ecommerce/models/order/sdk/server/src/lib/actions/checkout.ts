"use server";

import { host, route, IModel } from "@sps/ecommerce/models/order/sdk/model";
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

export async function action(props: IActionProps): Promise<IModel> {
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
    `${host}${route}/${id}/checkout?${stringifiedQuery}`,
    requestOptions,
  );

  const json = await responsePipe<{ data: IModel }>({
    res,
  });

  const transformedData = transformResponseItem<IModel>(json);

  return transformedData;
}
