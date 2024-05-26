import { db } from "@sps/sps-db-provider";
import {
  Table,
  populate,
  schemaName,
} from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";
import QueryString from "qs";

export async function service(props: {
  id: string;
  query?: Record<string, string>;
}) {
  const { query } = props;

  let populateParams: any = {};
  if (query) {
    const { populate: parsedPopulate } = QueryString.parse(query);

    populateParams = parsedPopulate;
  }

  const { id } = props;

  const result = await db.query[schemaName].findFirst({
    where: eq(Table.id, id),
    with: populate(populateParams),
  });

  if (!result) {
    return null;
  }

  return result;
}
