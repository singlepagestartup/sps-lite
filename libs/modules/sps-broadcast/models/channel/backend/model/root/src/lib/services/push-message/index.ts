import { model as messageModel } from "@sps/sps-broadcast/models/message/backend/model/root";
import { service as findEntities } from "../find";
import { model as channelsToMessagesModel } from "@sps/sps-broadcast/relations/channels-to-messages/backend/model/root";

export async function service(props: {
  data: {
    channelName: string;
    payload: string;
  };
}) {
  const { data } = props;

  const [channel] = await findEntities({
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
    throw new Error("Channel not found");
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
