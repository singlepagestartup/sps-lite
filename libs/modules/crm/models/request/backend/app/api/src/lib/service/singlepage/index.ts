import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService, type IMutationEffects } from "@sps/shared-backend-api";
import { logger } from "@sps/backend-utils";
import { Table } from "@sps/crm/models/request/backend/repository/database";
import type { Repository } from "../../repository";
import type { Service as FormsToRequestsService } from "@sps/crm/relations/forms-to-requests/backend/app/api/src/lib/service";

type Request = typeof Table.$inferSelect;
export type TNotificationStatus = "queued" | "sent" | "failed";
export interface ISubmissionProps {
  key: string;
  digest: string;
  formId: string;
  payload: Record<string, unknown>;
}
export type TMutationPublisher = (effects: IMutationEffects) => Promise<void>;
let mutationPublisher: TMutationPublisher | undefined;
export function setCrmRequestMutationPublisher(publish: TMutationPublisher) {
  mutationPublisher = publish;
}

@injectable()
export class Service extends CRUDService<Request> {
  private submissionRelations?: FormsToRequestsService;
  private submissionPublisher?: TMutationPublisher;
  configureSubmissions(props: {
    formsToRequests: FormsToRequestsService;
    publish?: TMutationPublisher;
  }) {
    this.submissionRelations = props.formsToRequests;
    this.submissionPublisher = props.publish;
  }
  private publisher() {
    const publish = this.submissionPublisher || mutationPublisher;
    if (!publish)
      throw new Error(
        "Configuration error. CRM mutation publisher is not configured",
      );
    return publish;
  }
  private owner() {
    return this.repository as Repository;
  }
  private scoped(db: Repository["db"]): this {
    const repository = Object.assign(
      Object.create(Object.getPrototypeOf(this.repository)),
      this.repository,
      { db },
    );
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this, {
      repository,
    });
  }
  async findSubmission(props: {
    key: string;
    digest: string;
  }): Promise<Request | undefined> {
    const rows = await this.find({
      params: {
        filters: {
          and: [
            {
              column: "payload->>submissionKey",
              method: "eq",
              value: props.key,
            },
          ],
        },
      },
    });
    if (rows.length > 1)
      throw new Error(
        "Internal error. Multiple CRM Requests share a submission key",
      );
    const row = rows[0];
    if (row && row.payload?.submissionDigest !== props.digest)
      throw new Error(
        "Validation error. Submission ID was already used with different values",
      );
    return row;
  }
  async submit(
    props: ISubmissionProps,
  ): Promise<{ request: Request; created: boolean }> {
    const publish = this.publisher();
    if (!this.submissionRelations)
      throw new Error(
        "Configuration error. CRM submission relations are not configured",
      );
    let relationId: string | undefined;
    const result = await this.owner().transaction(async (db) => {
      const scope = this.scoped(db);
      await scope.owner().lockSubmission(props.key);
      const existing = await scope.findSubmission(props);
      if (existing) return { request: existing, created: false };
      const request = await scope.create({
        data: {
          payload: {
            ...props.payload,
            submissionKey: props.key,
            submissionDigest: props.digest,
            notificationStatus: "queued",
          },
        },
      });
      const relation = await this.submissionRelations!.withTransaction(
        db,
      ).create({
        data: { formId: props.formId, requestId: request.id },
      });
      relationId = relation.id;
      return { request, created: true };
    });
    if (result.created)
      await this.publish(publish, result.request.id, relationId);
    return result;
  }
  async setSubmissionNotificationStatus(props: {
    id: string;
    key: string;
    status: TNotificationStatus;
  }): Promise<Request> {
    const publish = this.publisher();
    const request = await this.owner().transaction(async (db) => {
      const scope = this.scoped(db);
      await scope.owner().lockSubmission(props.key);
      const current = await scope.findById({ id: props.id });
      if (!current || current.payload?.submissionKey !== props.key)
        throw new Error("Not Found error. CRM submission was not found");
      const saved = await scope.update({
        id: props.id,
        data: {
          ...current,
          payload: { ...current.payload, notificationStatus: props.status },
        },
      });
      if (!saved)
        throw new Error("Not Found error. CRM submission was not found");
      return saved;
    });
    await this.publish(publish, request.id);
    return request;
  }
  private async publish(
    publish: TMutationPublisher,
    requestId: string,
    relationId?: string,
  ) {
    try {
      await publish({
        topics: ["crm.requests", "crm.forms-to-requests"],
        payload: "/api/crm/requests",
        tags: [
          "/api/crm/requests",
          "/api/crm/requests/count",
          "/api/crm/requests/" + requestId,
          "/api/crm/forms-to-requests",
          "/api/crm/forms-to-requests/count",
          ...(relationId ? ["/api/crm/forms-to-requests/" + relationId] : []),
        ],
      });
    } catch (error) {
      logger.error(error);
    }
  }
}
