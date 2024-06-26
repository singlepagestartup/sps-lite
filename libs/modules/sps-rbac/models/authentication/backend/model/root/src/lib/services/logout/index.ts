import { Table as SessionTable } from "@sps/sps-rbac/models/session/backend/schema/root";
import { model as subjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/model/root";
import { HTTPException } from "hono/http-exception";

export async function service(props: {
  session: typeof SessionTable.$inferSelect;
}) {
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
