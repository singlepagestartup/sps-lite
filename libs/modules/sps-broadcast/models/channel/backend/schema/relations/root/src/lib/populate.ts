import { populate as channelsToMessages } from "@sps/sps-broadcast/models/channel/backend/schema/relations/channels-to-messages";
export const populate = (params: any) => {
  return { channelsToMessages: channelsToMessages(params) } as const;
};
