import { Table as SessionTable } from "@sps/sps-rbac-models-session-backend-schema";
import { model as subjectsToSessions } from "@sps/sps-rbac-relations-subjects-to-sessions-backend-model";
import { HTTPException } from "hono/http-exception";

export async function service(props: {
  session: typeof SessionTable.$inferSelect;
}) {
  const userToSession = await subjectsToSessions.services.find({
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

  if (!userToSession.length) {
    throw new HTTPException(401, {
      message: "Unauthorized",
    });
  }

  return userToSession[0];
}
