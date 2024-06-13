import { app as telegramMessage } from "@sps/sps-third-parties-models-telegram-message-backend-app";
import { app as telegram } from "@sps/sps-third-parties-models-telegram-backend-app";
import { app as widget } from "@sps/sps-third-parties-models-widget-backend-app";
export const routes = {
  "/telegram-messages": telegramMessage,
  "/telegrams": telegram,
  "/widgets": widget,
};
