import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-third-parties/models/telegram/backend/repository/database";
import { Telegram } from "./telegam/Telegam";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  async sendMessage(props: { id: string; message: string; to: string }) {
    const { id, message, to } = props;

    const result = await this.findById({ id });

    if (!result) {
      throw new Error("Invalid id");
    }

    const telegram = new Telegram({ token: result.token, id: result.id });
    telegram.bot.telegram.sendMessage(to, message);

    return result;
  }
}
