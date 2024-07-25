import { handler } from "./start";
import { handlers as callbackQueryHandlers } from "./callback-query";
import { handlers as messageHandlers } from "./message";

export const handlers = {
  start: handler,
  message: messageHandlers,
  callback_query: callbackQueryHandlers,
};
