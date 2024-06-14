import { db } from "@sps/sps-rbac-backend-db";
import {
  insertSchema,
  Table,
} from "@sps/sps-rbac-models-authentication-backend-schema";
import { Table as SessionTable } from "@sps/sps-rbac-models-session-backend-schema";
import { model as identityModel } from "@sps/sps-rbac-models-identity-backend-model";
import { model as subjectsToIdentities } from "@sps/sps-rbac-relations-subjects-to-identities-backend-model";

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
            value: props.data.email,
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
    throw new Error("No user associated with this identity");
  }

  const plainData = insertSchema.parse(props.data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  const userToSession = await subjectsToIdentities.services.create({
    data: {
      subjectId: identity.subjectsToIdentities[0].subjectId,
      sessionId: props.session.id,
    },
  });

  return entity;
}
