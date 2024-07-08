import { service as createEntity } from "../../../../../../../../message/backend/model/root/src/lib/services/create";
import { model as channelModel } from "@sps/sps-broadcast/models/channel/backend/model/root";
import { model as channelsToMessagesModel } from "@sps/sps-broadcast/relations/channels-to-messages/backend/model/root";

export async function service(props: {
  data: {
    channelName: string;
    payload: string;
  };
}) {
  const { data } = props;

  const [channel] = await channelModel.services.find({
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

  const entity = await createEntity({
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
