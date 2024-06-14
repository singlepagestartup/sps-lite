import { db } from "@sps/sps-third-parties-backend-db";
import {
  Table,
  populate,
  schemaName,
} from "@sps/sps-third-parties-models-telegram-backend-schema";
import { eq } from "drizzle-orm";
import { FindByIdServiceProps } from "@sps/shared-backend-api";
import { Telegram } from "../../telegam/Telegam";

export async function service(
  props: FindByIdServiceProps & { message: string },
) {
  const { id, message } = props;

  const result = await db.query[schemaName].findFirst({
    where: eq(Table.id, id),
    with: populate(props?.params?.populate),
  });

  if (!result) {
    throw new Error("Invalid id");
  }

  const telegram = new Telegram({ token: result.token, id: result.id });
  // telegram.bot.telegram.sendMessage("chatId | accountId", message);

  return result;
}
