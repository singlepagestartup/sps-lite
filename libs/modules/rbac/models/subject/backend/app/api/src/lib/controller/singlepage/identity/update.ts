import { RBAC_JWT_SECRET, RBAC_SECRET_KEY } from "@sps/shared-utils";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import * as jwt from "hono/jwt";
import { authorization, getHttpErrorType } from "@sps/backend-utils";
import type { Service } from "../../../service";
import { api as identityApi } from "@sps/rbac/models/identity/sdk/server";
import { applyOutputSchema } from "@sps/shared-backend-api";

export class Handler {
  service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  async execute(c: Context, next: any): Promise<Response> {
    try {
      if (!RBAC_JWT_SECRET) {
        throw new Error("Configuration error. RBAC_JWT_SECRET not set");
      }

      if (!RBAC_SECRET_KEY) {
        throw new Error("Configuration error. RBAC_SECRET_KEY not set");
      }

      const token = authorization(c);

      if (!token) {
        throw new Error("Validation error. No token");
      }

      const decoded = await jwt.verify(token, RBAC_JWT_SECRET);

      const uuid = c.req.param("uuid");
      const identityUuid = c.req.param("identityUuid");

      if (decoded?.["subject"]?.["id"] !== uuid) {
        throw new Error(
          "Validation error. Only identity owner can update identity.",
        );
      }

      const body = await c.req.parseBody();

      if (typeof body["data"] !== "string") {
        throw new Error("Validation error. Invalid body");
      }

      const data = JSON.parse(body["data"]);
      if (
        !data ||
        typeof data !== "object" ||
        Array.isArray(data) ||
        Object.keys(data).some(
          (key) => !["email", "password", "newPassword"].includes(key),
        )
      )
        throw new Error(
          "Validation error. Only email or password may be updated",
        );

      const subjectsToIdentities = await this.service.subjectsToIdentities.find(
        {
          params: {
            filters: {
              and: [
                {
                  column: "subjectId",
                  method: "eq",
                  value: uuid,
                },
                {
                  column: "identityId",
                  method: "eq",
                  value: identityUuid,
                },
              ],
            },
          },
        },
      );

      if (!subjectsToIdentities?.length) {
        throw new Error("Not Found error. No subjects to identities found");
      }

      if (subjectsToIdentities.length > 1) {
        throw new Error(
          "Internal error. Multiple subjects to identities found",
        );
      }

      const identity = await this.service.identity.findById({
        id: identityUuid,
      });

      if (!identity) {
        throw new Error("Not Found error. No identity found");
      }

      if (identity.provider !== "email_and_password")
        throw new Error(
          "Validation error. This sign-in provider manages its own credentials",
        );
      if (data.password !== undefined || data.newPassword !== undefined) {
        if (
          typeof data.password !== "string" ||
          typeof data.newPassword !== "string" ||
          data.newPassword.length < 8 ||
          data.email !== undefined
        )
          throw new Error(
            "Validation error. Current and new passwords are required",
          );
        await identityApi.changePassword({
          id: identity.id,
          data: {
            password: data.password,
            newPassword: data.newPassword,
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });
      } else {
        throw new Error(
          "Validation error. Verify your current and new email before changing it.",
        );
      }
      const updated = await this.service.identity.findById({
        id: identityUuid,
      });

      return c.json(
        {
          data: applyOutputSchema({
            c,
            service: this.service.identity,
            data: updated,
          }),
        },
        201,
      );
    } catch (error: any) {
      const { status, message, details } = getHttpErrorType(error);
      throw new HTTPException(status, { message, cause: details });
    }
  }
}
