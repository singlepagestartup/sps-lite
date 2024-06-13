import { message } from "telegraf/filters";
import { Telegraf, session } from "telegraf";
import { BACKEND_URL } from "@sps/shared-utils";
import { util as getCallbackQuery } from "./utils/get-callback-query";
import { handlers } from "./handlers";

export class Telegram {
  id: string;
  bot: Telegraf;

  constructor({ token, id }: { token: string; id: string }) {
    this.id = id;
    this.bot = new Telegraf(token);

    this.bot.use(session({ defaultSession: () => ({ messages: [] }) }));

    this.setHandlers();
  }

  async launch() {
    await this.bot.createWebhook({
      domain: BACKEND_URL,
      path: `/api/sps-third-parties/telegrams/${this.id}/webhook`,
    });

    this.setHandlers();
  }

  async stop() {
    this.bot.stop();
  }

  setHandlers() {
    this.bot.command("start", async (ctx) => {
      handlers.start(ctx);
    });

    this.bot.on(message("text"), async (ctx) => {
      const chat = ctx.chat;

      if (chat?.type !== "private") {
        return;
      }

      try {
        const message = ctx.message.text;

        if (typeof handlers.callback_query[message] === "function") {
          return handlers.callback_query[message](ctx);
        }

        ctx.reply(message, {
          parse_mode: "HTML",
        });
      } catch (error: any) {
        console.log(`message("text")`, error?.message);
      }
    });

    this.bot.on("callback_query", async (ctx) => {
      try {
        const callBackData = getCallbackQuery({ ctx });

        if (callBackData) {
          if (typeof handlers.callback_query[callBackData] === "function") {
            return handlers.callback_query[callBackData](ctx);
          }
        }
      } catch (error: any) {
        console.error(`bot.on "callback_query"`, error?.message);
      }
    });
  }
}
