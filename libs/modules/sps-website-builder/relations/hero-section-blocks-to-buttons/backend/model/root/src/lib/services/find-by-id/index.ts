import { db } from "@sps/sps-db-provider";
import {
  Table,
  populate,
  modelName,
} from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-backend-schema";
import { eq } from "drizzle-orm";

export async function service(props: { id: string }) {
  const { id } = props;

  const result = await db.query[modelName].findFirst({
    where: eq(Table.id, id),
    with: populate,
  });

  if (!result) {
    return null;
  }

  return result;
}
