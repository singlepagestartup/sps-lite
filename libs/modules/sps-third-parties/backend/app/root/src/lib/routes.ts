import { app as telegramMessage } from "@sps/sps-third-parties/models/telegram-message/backend/app/root";
import { app as telegram } from "@sps/sps-third-parties/models/telegram/backend/app/root";
import { app as widget } from "@sps/sps-third-parties/models/widget/backend/app/root";
export const routes = {
  "/telegram-messages": telegramMessage,
  "/telegrams": telegram,
  "/widgets": widget,
};
