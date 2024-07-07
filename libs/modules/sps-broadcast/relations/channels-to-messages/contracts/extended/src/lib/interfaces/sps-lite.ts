import type { IRelation as IParentRelation } from "@sps/sps-broadcast/relations/channels-to-messages/contracts/root";
import { IModel as IChannel } from "@sps/sps-broadcast/models/channel/contracts/root";

import { IModel as IMessage } from "@sps/sps-broadcast/models/message/contracts/root";

export interface IRelation extends IParentRelation {
  channel: IChannel;

  message: IMessage;
}
