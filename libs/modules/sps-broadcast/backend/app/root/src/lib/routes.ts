import { app as message } from "@sps/sps-broadcast/models/message/backend/app/root";
import { app as channel } from "@sps/sps-broadcast/models/channel/backend/app/root";
export const routes = { "/messages": message, "/channels": channel };
