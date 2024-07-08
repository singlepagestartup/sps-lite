import { model as messageModel } from "@sps/sps-broadcast/models/message/backend/model/root";
import { model as channelModel } from "@sps/sps-broadcast/models/channel/backend/model/root";
import { model as channelsToMessagesModel } from "@sps/sps-broadcast/relations/channels-to-messages/backend/model/root";

export async function service(props: {
  data: {
    channelName: string;
    payload: string;
  };
}) {
  const { data } = props;

  let [channel] = await channelModel.services.find({
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
    await channelModel.services.create({
      data: {
        title: data.channelName,
      },
    });

    [channel] = await channelModel.services.find({
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
