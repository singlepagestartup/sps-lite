import { db } from "@sps/sps-rbac/backend/db/root";
import {
  insertSchema,
  Table,
} from "@sps/sps-rbac/models/authentication/backend/schema/root";
import { Table as SessionTable } from "@sps/sps-rbac/models/session/backend/schema/root";
import { model as identityModel } from "@sps/sps-rbac/models/identity/backend/model/root";
import { model as subjectsToSessions } from "@sps/sps-rbac/relations/subjects-to-sessions/backend/model/root";

export async function service(props: {
  data: any;
  session: typeof SessionTable.$inferSelect;
  provider: "login_and_password";
}) {
  const identities = await identityModel.services.find({
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
