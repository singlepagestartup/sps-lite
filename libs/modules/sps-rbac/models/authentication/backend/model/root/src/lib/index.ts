import "reflect-metadata";
import {
  DI,
  DefaultService,
  FindServiceProps,
  type IDefaultService,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { db } from "@sps/sps-rbac/backend/db/root";
import {
  schemaName,
  Table,
  insertSchema,
} from "@sps/sps-rbac/models/authentication/backend/schema/root";
import { Table as SessionTable } from "@sps/sps-rbac/models/session/backend/schema/root";
import { model as subjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/model/root";
import { HTTPException } from "hono/http-exception";
import { eq } from "drizzle-orm";

@injectable()
export class Model {
  constructor(@inject(DI.IService) service: IDefaultService) {}

  async providers(props: {
    data: any;
    session: typeof SessionTable.$inferSelect;
    provider: "login_and_password";
  }) {
    const identityService = new DefaultService();

    const identityFilter = {
      params: {
        filters: {
          and: [
            {
              column: "email",
              method: "eq",
              value: props.data.login,
            },
            {
              column: "password",
              method: "eq",
              value: props.data.password,
            },
          ],
        },
      },
    };

    const identities = await identityService.find({
      db,
      schemaName: "identity",
    });

    if (!identities.length) {
      throw new Error("Invalid credentials");
    }

    const identity = identities[0];

    if (identity.subjectsToIdentities.length === 0) {
      throw new Error("No subject associated with this identity");
    }

    const plainData = insertSchema.parse(props.data);

    const [entity] = await db.insert(Table).values(plainData).returning();

    const subjectToSession = await subjectsToSessions.services.create({
      data: {
        subjectId: identity.subjectsToIdentities[0].subjectId,
        sessionId: props.session.id,
      },
    });

    return entity;
  }

  async isAuthenticatated(
    props: FindServiceProps & {
      session: typeof SessionTable.$inferSelect;
    },
  ) {
    const entities = await db.query[schemaName].findMany({
      with: {
        sessionsToAuthentications: {
          where: (sessionToAuthentication) => {
            return eq(sessionToAuthentication.sessionId, props.session.id);
          },
        },
      },
    });

    const subjectToSession = await subjectsToSessions.services.find({
      params: {
        filters: {
          and: [
            {
              column: "subjectId",
              method: "isNotNull",
            },
            {
              column: "sessionId",
              method: "eq",
              value: props.session.id,
            },
          ],
        },
      },
    });

    if (!subjectToSession.length) {
      throw new HTTPException(401, {
        message: "Unauthorized",
      });
    }

    return subjectToSession[0];
  }

  async logout(props: { session: typeof SessionTable.$inferSelect }) {
    const subjectToSession = await subjectsToSessions.services.find({
      params: {
        filters: {
          and: [
            {
              column: "subjectId",
              method: "isNotNull",
            },
            {
              column: "sessionId",
              method: "eq",
              value: props.session.id,
            },
          ],
        },
      },
    });

    if (!subjectToSession.length) {
      throw new HTTPException(401, {
        message: "Unauthorized",
      });
    }
    const deletedEntity = await subjectsToSessions.services.delete({
      id: subjectToSession[0].id,
    });

    return deletedEntity;
  }
}
