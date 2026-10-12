import { Component as AdminV2Card } from "./admin-v2-card/index";
import { Component as AdminV2Table } from "./admin-v2-table/index";
import { Component as IdAiChat } from "./id/ai-chat/index";
import { Component as ListItemDocumentAiChat } from "./list-item-document-ai-chat/index";
import { Component as DownloadAiChat } from "./download/ai-chat/index";
import { Component as SidebarAiChat } from "./id-sidebar-ai-chat/index";
import { Component as List } from "./list/index";

export const variants = {
  "admin-v2-card": AdminV2Card,
  "admin-v2-table": AdminV2Table,
  "id-ai-chat": IdAiChat,
  "id-sidebar-ai-chat": SidebarAiChat,
  "list-item-document-ai-chat": ListItemDocumentAiChat,
  "download-ai-chat": DownloadAiChat,
  list: List,
};
