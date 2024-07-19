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

  constructor(@inject(DI.IRepository) private r: IDefaultRepository<SCHEMA>) {
    super(r);
  }

  async providers() {
    // const identityService = new DefaultService();

    // const identityFilter = {
    //   params: {
    //     filters: {
    //       and: [
    //         {
    //           column: "email",
    //           method: "eq",
    //           value: props.data.login,
    //         },
    //         {
    //           column: "password",
    //           method: "eq",
    //           value: props.data.password,
    //         },
    //       ],
    //     },
    //   },
    // };

    // const identities = await identityService.find({
    //   db,
    //   schemaName: "identity",
    // });

    // if (!identities.length) {
    //   throw new Error("Invalid credentials");
    // }

    // const identity = identities[0];

    // if (identity.subjectsToIdentities.length === 0) {
    //   throw new Error("No subject associated with this identity");
    // }

    // const plainData = insertSchema.parse(props.data);

    // const [entity] = await db.insert(Table).values(plainData).returning();

    // const subjectToSession = await subjectsToSessions.services.create({
    //   data: {
    //     subjectId: identity.subjectsToIdentities[0].subjectId,
    //     sessionId: props.session.id,
    //   },
    // });

    return {
      ok: true,
    };
  }

  async isAuthenticatated() {
    // const entities = await db.query[schemaName].findMany({
    //   with: {
    //     sessionsToAuthentications: {
    //       where: (sessionToAuthentication) => {
    //         return eq(sessionToAuthentication.sessionId, props.session.id);
    //       },
    //     },
    //   },
    // });

    // const subjectToSession = await subjectsToSessions.services.find({
    //   params: {
    //     filters: {
    //       and: [
    //         {
    //           column: "subjectId",
    //           method: "isNotNull",
    //         },
    //         {
    //           column: "sessionId",
    //           method: "eq",
    //           value: props.session.id,
    //         },
    //       ],
    //     },
    //   },
    // });

    // if (!subjectToSession.length) {
    //   throw new HTTPException(401, {
    //     message: "Unauthorized",
    //   });
    // }

    // return subjectToSession[0];
    return {
      ok: true,
    };
  }

  async logout() {
    // const subjectToSession = await subjectsToSessions.services.find({
    //   params: {
    //     filters: {
    //       and: [
    //         {
    //           column: "subjectId",
    //           method: "isNotNull",
    //         },
    //         {
    //           column: "sessionId",
    //           method: "eq",
    //           value: props.session.id,
    //         },
    //       ],
    //     },
    //   },
    // });

    // if (!subjectToSession.length) {
    //   throw new HTTPException(401, {
    //     message: "Unauthorized",
    //   });
    // }
    // const deletedEntity = await subjectsToSessions.services.delete({
    //   id: subjectToSession[0].id,
    // });

    // return deletedEntity;
    return {
      ok: true,
    };
  }
}
