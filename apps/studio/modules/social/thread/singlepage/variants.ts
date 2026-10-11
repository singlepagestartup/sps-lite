import { Component as DownloadAiChat } from "./download/ai-chat";
import { Component as AdminV2Card } from "./admin-v2-card/index";
import { Component as AdminV2Table } from "./admin-v2-table/index";
import { Component as CreateAiChat } from "./create/ai-chat/index";
import { Component as IdAiChat } from "./id/ai-chat/index";
import { Component as IdAiChatSettings } from "./id/ai-chat-settings/index";
import { Component as MessageListAiChat } from "./message/list/ai-chat/index";
import { Component as ListItemSidebarAiChat } from "./list-item-sidebar-ai-chat/index";
import { Component as ChatSettings } from "./chat-settings/index";
import { Component as List } from "./list/index";
import { Component as ListDefault } from "./list-default/index";

export const variants = {
  "download-ai-chat": DownloadAiChat,
  "admin-v2-card": AdminV2Card,
  "admin-v2-table": AdminV2Table,
  "create-ai-chat": CreateAiChat,
  "id-ai-chat": IdAiChat,
  "id-ai-chat-settings": IdAiChatSettings,
  "message-list-ai-chat": MessageListAiChat,
  "list-item-sidebar-ai-chat": ListItemSidebarAiChat,
  "chat-settings": ChatSettings,
  list: List,
  "list-default": ListDefault,
};
