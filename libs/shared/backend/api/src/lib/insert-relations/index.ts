import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { RelationConfig } from "../transform-data";
import { eq } from "drizzle-orm";

export async function insertRelations<Config extends RelationConfig>({
  db,
  id,
  data,
  config,
}: {
  db: PostgresJsDatabase<any>;
  id: string;
  data: any;
  config: Config;
}) {
  for (const relationName of Object.keys(config)) {
    if (data[relationName] === undefined) {
      continue;
    }

    const typedRealtionName = relationName as keyof typeof config;
    const relation = config[typedRealtionName];

    const existingRelations = await db
      .select()
      .from(relation.leftTable.table)
      .where(eq(relation.leftTable.table[relation.leftTable.schemaKey], id));

    for (const existingRelation of existingRelations) {
      const existsInData = data[relationName].find(
        (relationData: any) =>
          relationData.id ===
          existingRelation[relation.rightTables[0].schemaKey],
      );

      if (!existsInData) {
        await db
          .delete(relation.leftTable.table)
          .where(
            eq(relation.leftTable.table[relation.leftTable.schemaKey], id),
          );
      }
    }

    for (const relationData of data[relationName]) {
      const createData = {
        [relation.leftTable.schemaKey]: id,
        [relation.rightTables[0].schemaKey]: relationData.id as string,
      };

      const result = await db
        .insert(relation.leftTable.table)
        .values(createData as any)
        .returning();
    }
  }
}
