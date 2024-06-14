import { Table as SessionTable } from "@sps/sps-rbac-models-session-backend-schema";
import { model as subjectsToSessions } from "@sps/sps-rbac-relations-subjects-to-sessions-backend-model";
import { db } from "@sps/sps-rbac-backend-db";
import { schemaName } from "@sps/sps-rbac-models-authentication-backend-schema";
import { HTTPException } from "hono/http-exception";
import { FindServiceProps } from "@sps/shared-backend-api";
import { eq } from "drizzle-orm";

export async function service(
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
