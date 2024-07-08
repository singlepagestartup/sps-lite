import { model as messageModel } from "@sps/sps-broadcast/models/message/backend/model/root";
import { service as findEntities } from "../find";
import { service as createEntities } from "../create";
import { model as channelsToMessagesModel } from "@sps/sps-broadcast/relations/channels-to-messages/backend/model/root";

export async function service(props: {
  data: {
    channelName: string;
    payload: string;
  };
}) {
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
    await createEntities({
      data: {
        title: data.channelName,
      },
    });

    [channel] = await findEntities({
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
  }

  const entity = await messageModel.services.create({
    data: {
      payload: data.payload,
    },
  });

  await channelsToMessagesModel.services.create({
    data: {
      channelId: channel.id,
      messageId: entity.id,
    },
  });

  return entity;
}
