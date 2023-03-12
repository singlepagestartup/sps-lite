import utils from "@rogwild/next-utils";
import axios from "axios";
import { stringify } from "qs";
const { transformResponseItem } = utils.api;

interface IAxiosProps {
  url: string;
  params?: any;
  data?: any;
  method?: `GET` | `POST` | `PUT` | `DELETE`;
}

export async function getBackendData(props: IAxiosProps) {
  const { url, params, data, method = `GET` } = props;

  const query = stringify(params || {}, {
    encodeValuesOnly: true,
  });

  return await axios({
    url: `${url}?${query}`,
    method,
    data,
  })
    .then((res) => {
      if (Array.isArray(res.data?.data)) {
        const result: any = res.data.data?.map((item: any) =>
          transformResponseItem(item)
        );
        result[`_meta`] = res.data?.meta as any;

        return result;
      } else {
        return {
          ...transformResponseItem(res.data?.data),
          _meta: res.data?.meta,
        };
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
