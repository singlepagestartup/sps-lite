import { service as findEntities } from "../find";
import { BACKEND_URL, SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";

export async function service(props: {
  data: {
    channelName: string;
    payload: string;
  };
}) {
  if (!SPS_RBAC_SECRET_KEY) {
    throw new Error("SPS_RBAC_SECRET_KEY is not defined");
  }

  const { data } = props;

  let [channel] = await findEntities({
    params: {
      filters: {
        and: [
          {
            column: "title",
            method: "eq",
            value: data.channelName,
          },
        ],
      },
    },
  });

  if (!channel) {
    const body = new FormData();

    body.append(
      "data",
      JSON.stringify({
        title: data.channelName,
      }),
    );

    channel = await fetch(`${BACKEND_URL}/api/sps-broadcast/channels`, {
      method: "POST",
      headers: {
        "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
      },
      body,
    }).then(async (res) => {
      const json = await res.json();
      return json.data;
    });
  } else {
    const body = new FormData();

    body.append(
      "data",
      JSON.stringify({
        title: channel.title,
      }),
    );

    channel = await fetch(
      `${BACKEND_URL}/api/sps-broadcast/channels/${channel.id}`,
      {
        method: "PATCH",
        headers: {
          "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
        },
        body,
      },
    ).then(async (res) => {
      const json = await res.json();
      return json.data;
    });
  }

  const messageBody = new FormData();
  messageBody.append(
    "data",
    JSON.stringify({
      payload: data.payload,
    }),
  );

  const message = await fetch(`${BACKEND_URL}/api/sps-broadcast/messages`, {
    method: "POST",
    headers: {
      "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
    },
    body: messageBody,
  }).then(async (res) => {
    const json = await res.json();
    return json.data;
  });

  const channelToMessageBody = new FormData();
  channelToMessageBody.append(
    "data",
    JSON.stringify({
      channelId: channel.id,
      messageId: message.id,
    }),
  );

  const channelToMessage = await fetch(
    `${BACKEND_URL}/api/sps-broadcast/channels-to-messages`,
    {
      method: "POST",
      headers: {
        "X-SPS-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
      },
      body: channelToMessageBody,
    },
  ).then(async (res) => {
    const json = await res.json();
    return json.data;
  });

  return message;
}
