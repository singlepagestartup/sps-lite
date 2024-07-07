import { IRelation as IChannelsToMessages } from "@sps/sps-broadcast/relations/channels-to-messages/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-broadcast/models/channel/contracts/root";

export interface IModel extends IParentModel {
  channelsToMessages: IChannelsToMessages[];
}
