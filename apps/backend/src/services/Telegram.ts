import { message } from "telegraf/filters";
import { type Context, Telegraf, session } from "telegraf";
import axios from "axios";
// import ffmpeg from "fluent-ffmpeg";
// const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
import fs from "fs/promises";
import path from "path";
import OpenAI from "./OpenAi";
import type { Update } from "telegraf/types";

// ffmpeg.setFfmpegPath(ffmpegPath.path);

interface TelegramBotContext<U extends Update = Update> extends Context<U> {
  session: {
    messages: { role: "user" | "assistant"; content: string }[];
  };
}

class Telegram {
  bot: Telegraf<TelegramBotContext>;
  openAi: OpenAI;

  constructor() {
    this.bot = new Telegraf<TelegramBotContext>(
      process.env.TELEGRAM_BOT_TOKEN || "",
    );

    this.bot.use(session({ defaultSession: () => ({ messages: [] }) }));

    this.setHandlers();

    this.bot.createWebhook({
      domain: process.env.BACKEND_URL || "",
      path: "/api/telegram/webhook",
    });

    this.openAi = new OpenAI();
  }

  setHandlers() {
    this.bot.command("start", (ctx) => {
      ctx.session.messages = [];

      ctx.reply("Welcome to the sps chat bot!");
    });

    this.bot.on(message("text"), async (ctx) => {
      const text = ctx.message.text;

      ctx.session.messages.push({ role: "user", content: text });

      const openAiResponseMessage = await this.openAi.chat(
        ctx.session.messages,
      );

      ctx.session.messages.push({
        role: "assistant",
        content: openAiResponseMessage,
      });

      await ctx.reply(openAiResponseMessage);
    });

    this.bot.on(message("voice"), async (ctx) => {
      try {
        const mes = await ctx.reply("Processing...");

        const linkToFile = await this.bot.telegram.getFileLink(
          ctx.message.voice.file_id,
        );
        const senderId = `${ctx.message.from.id}`;

        const voiceBuffer = await axios({
          method: "GET",
          url: linkToFile.href,
          responseType: "arraybuffer",
        }).then((res) => {
          return res.data;
        });

        try {
          await fs.readdir(path.join(__dirname, "../../tmp"));
        } catch (error) {
          await fs.mkdir(path.join(__dirname, "../../tmp"));
        }

        const tmpFileName = `../../tmp/${ctx.message.message_id}`;

        await fs.writeFile(
          path.join(__dirname, `${tmpFileName}.ogg`),
          voiceBuffer,
        );

        // await new Promise((resolve, reject) => {
        //   ffmpeg()
        //     .input(path.join(__dirname, `${tmpFileName}.ogg`))
        //     .inputOptions("-t 30")
        //     .toFormat("mp3")
        //     .on("end", () => {
        //       fs.unlink(path.join(__dirname, `${tmpFileName}.ogg`));
        //       resolve("");
        //     })
        //     .on("error", (error) => {
        //       reject(error);
        //     })
        //     .output(path.join(__dirname, `${tmpFileName}.mp3`))
        //     .run();
        // });

        const text = await this.openAi.transcript(
          path.join(__dirname, `${tmpFileName}.mp3`),
        );

        ctx.session.messages.push({ role: "user", content: text });

        ctx.telegram.editMessageText(
          ctx.chat.id,
          mes.message_id,
          null,
          `Got request from you: ${text}`,
        );

        const openAiResponseMessage = await this.openAi.chat(
          ctx.session.messages,
        );

        ctx.session.messages.push({
          role: "assistant",
          content: openAiResponseMessage,
        });

        await ctx.reply(openAiResponseMessage);
      } catch (error) {
        console.log("🚀 ~ Telegram ~ setHandlers ~ error", error.message);
      }
    });
  }
}

export default Telegram;
