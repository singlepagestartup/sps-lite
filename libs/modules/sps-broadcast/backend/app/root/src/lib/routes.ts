import { app as channelsToMessages } from "@sps/sps-broadcast/relations/channels-to-messages/backend/app/root";
import { app as message } from "@sps/sps-broadcast/models/message/backend/app/root";
import { app as channel } from "@sps/sps-broadcast/models/channel/backend/app/root";
export const routes = {
  "/channels-to-messages": channelsToMessages,
  "/messages": message,
  "/channels": channel,
};
