import {
  DefaultEntity,
  DI,
  type IDefaultRepository,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";

@injectable()
export class Entity<
  SCHEMA extends Record<string, unknown>,
> extends DefaultEntity<SCHEMA> {
  title: string;

  constructor(@inject(DI.IRepository) repository: IDefaultRepository<SCHEMA>) {
    super(repository);
  }

  async create(data: SCHEMA) {
    const superResult = super.create(data);

    // const { data } = props;

    // data.expiresAt = new Date(data.expiresAt);

    // const plainData = insertSchema.parse(data);

    // const [entity] = await db.insert(Table).values(plainData).returning();

    // const filterParams = {
    //   params: {
    //     filters: {
    //       and: [
    //         {
    //           column: "expiresAt",
    //           method: "lt",
    //           value: new Date(),
    //         },
    //       ],
    //     },
    //   },
    // };

    // const expiredSessions = await this.find();

    // for (const expiredSession of expiredSessions) {
    //   await this.delete({
    //     id: expiredSession.id,
    //   });
    // }

    return superResult;
  }
}
