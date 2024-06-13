import { service as find } from "../find";

export async function service(props: {
  contentPattern?: string;
  from: string;
  to: string;
}) {
  const filters = [
    {
      column: "from",
      method: "eq",
      value: props.from,
    },
    {
      column: "to",
      method: "eq",
      value: props.to,
    },
  ];

  if (props.contentPattern) {
    filters.push({
      column: "content",
      method: "ilike",
      value: props.contentPattern,
    });
  }

  const messages = await find({
    params: {
      filters: {
        and: filters,
      },
    },
  }).then((messages) => {
    if (!messages.length) {
      return;
    }

    return messages;
  });

  return messages;
}
