"use server";

import {
  host,
  route,
  IModel,
} from "@sps/sps-broadcast/models/channel/sdk/model";
import {
  NextRequestOptions,
  prepareFormDataToSend,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";

export interface IActionProps {
  catchErrors?: boolean;
  tag?: string;
  revalidate?: number;
  params?: {
    [key: string]: any;
  };
  options?: NextRequestOptions;
  data: any;
}

export async function action(props: IActionProps): Promise<IModel | undefined> {
  const { params, options, catchErrors, data } = props;

  const stringifiedQuery = QueryString.stringify(params, {
    encodeValuesOnly: true,
  });

  const formData = prepareFormDataToSend({ data });

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
    `${host}${route}/push-message?${stringifiedQuery}`,
    requestOptions,
  );

  if (!res.ok) {
    try {
      const json = await res.json();

      if (catchErrors) {
        console.error(json.error);

        return;
      } else {
        throw new Error(JSON.stringify(json.data));
      }
    } catch (error) {
      const requestError = new Error(`${res.status} | ${res.statusText}`);

      if (catchErrors) {
        console.error(`${requestError.message} | ${host}${route} | ${error}`);

        return;
      } else {
        throw error;
      }
    }
  }

  const json = await res.json();

  if (json.error) {
    if (catchErrors) {
      console.error(json.error);

      return;
    } else {
      throw new Error(json.error.message);
    }
  }

  const transformedData = transformResponseItem<IModel>(json);

  return transformedData;
}
