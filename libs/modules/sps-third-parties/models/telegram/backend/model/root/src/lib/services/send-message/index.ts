import { db } from "@sps/sps-third-parties/backend/db/root";
import {
  Table,
  populate,
  schemaName,
} from "@sps/sps-third-parties/models/telegram/backend/schema/root";
import { eq } from "drizzle-orm";
import { FindByIdServiceProps } from "@sps/shared-backend-api";
import { Telegram } from "../../telegam/Telegam";

export async function service(
  props: FindByIdServiceProps & { message: string; to: string },
) {
  const { id, message, to } = props;

  const result = await db.query[schemaName].findFirst({
    where: eq(Table.id, id),
    with: populate(props?.params?.populate),
  });

  if (!result) {
    throw new Error("Invalid id");
  }

  const telegram = new Telegram({ token: result.token, id: result.id });
  telegram.bot.telegram.sendMessage(to, message);

  return result;
}
