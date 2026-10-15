import { randomUUID } from "node:crypto";
import { Service } from "..";
import { Repository } from "../../repository";
import { Configuration } from "../../configuration";
import { Service as FormService } from "@sps/crm/models/form/backend/app/api/src/lib/service";
import { Repository as FormRepository } from "@sps/crm/models/form/backend/app/api/src/lib/repository";
import { Configuration as FormConfiguration } from "@sps/crm/models/form/backend/app/api/src/lib/configuration";
import { Service as FormsToRequestsService } from "@sps/crm/relations/forms-to-requests/backend/app/api/src/lib/service";
import { Repository as FormsToRequestsRepository } from "@sps/crm/relations/forms-to-requests/backend/app/api/src/lib/repository";
import { Configuration as FormsToRequestsConfiguration } from "@sps/crm/relations/forms-to-requests/backend/app/api/src/lib/configuration";
import {
  getPostgresClient,
  resetPostgresClient,
} from "@sps/shared-backend-database-config";

class EffectiveRequestService extends Service {
  override create(props: { data: any }) {
    return super.create({
      data: {
        ...props.data,
        payload: { ...props.data.payload, effectiveRequest: "startup" },
      },
    });
  }
}
class EffectiveRelationService extends FormsToRequestsService {
  override create(props: { data: any }) {
    return super.create({
      data: { ...props.data, variant: "startup-relation" },
    });
  }
}
const form = new FormService(
  new FormRepository(new FormConfiguration()),
  {} as any,
);
afterAll(async () => {
  await getPostgresClient().end();
  resetPostgresClient();
});

it("serializes concurrent retries into one committed Request and relation while preserving effective service overrides", async () => {
  const owner = await form.create({ data: { slug: `pr374-${randomUUID()}` } });
  const request = new EffectiveRequestService(
    new Repository(new Configuration()),
  );
  const relations = new EffectiveRelationService(
    new FormsToRequestsRepository(new FormsToRequestsConfiguration()),
  );
  const requestDb = request.repository.db;
  const relationDb = relations.repository.db;
  const key = `pr374-${randomUUID()}`;
  const published: unknown[] = [];
  request.configureSubmissions({
    formsToRequests: relations,
    publish: async (effects) => {
      const saved = await request.findSubmission({ key, digest: "digest" });
      expect(saved).toBeDefined();
      expect(
        await relations.find({
          params: {
            filters: {
              and: [{ column: "formId", method: "eq", value: owner.id }],
            },
          },
        }),
      ).toHaveLength(1);
      published.push(effects);
    },
  });
  let requestId: string | undefined;
  try {
    const results = await Promise.all(
      [1, 2].map(() =>
        request.submit({
          key,
          digest: "digest",
          formId: owner.id,
          payload: { formId: owner.id },
        }),
      ),
    );
    requestId = results[0].request.id;
    expect(results[1].request.id).toBe(requestId);
    expect(results.filter((result) => result.created)).toHaveLength(1);
    expect(results[0].request.payload?.effectiveRequest).toBe("startup");
    expect(published).toHaveLength(1);
    const links = await relations.find({
      params: {
        filters: { and: [{ column: "formId", method: "eq", value: owner.id }] },
      },
    });
    expect(links).toHaveLength(1);
    expect(links[0]).toMatchObject({ requestId, variant: "startup-relation" });
    expect(published[0]).toMatchObject({
      tags: expect.arrayContaining([
        "/api/crm/requests",
        "/api/crm/requests/" + requestId,
        "/api/crm/forms-to-requests",
        "/api/crm/forms-to-requests/" + links[0].id,
      ]),
    });
    await expect(
      request.submit({ key, digest: "changed", formId: owner.id, payload: {} }),
    ).rejects.toThrow("different values");
    expect(request.repository.db).toBe(requestDb);
    expect(relations.repository.db).toBe(relationDb);
  } finally {
    if (requestId) await request.delete({ id: requestId });
    await form.delete({ id: owner.id });
  }
});

it("rolls back both records and publishes nothing when the relation service fails after its insert", async () => {
  class FailingRelationService extends FormsToRequestsService {
    override async create(props: { data: any }) {
      await super.create(props);
      throw new Error("relation failure");
    }
  }
  const owner = await form.create({ data: { slug: `pr374-${randomUUID()}` } });
  const request = new Service(new Repository(new Configuration()));
  const relations = new FailingRelationService(
    new FormsToRequestsRepository(new FormsToRequestsConfiguration()),
  );
  const publish = jest.fn();
  request.configureSubmissions({ formsToRequests: relations, publish });
  const key = `pr374-${randomUUID()}`;
  try {
    await expect(
      request.submit({ key, digest: "digest", formId: owner.id, payload: {} }),
    ).rejects.toThrow("relation failure");
    expect(
      await request.findSubmission({ key, digest: "digest" }),
    ).toBeUndefined();
    expect(
      await relations.find({
        params: {
          filters: {
            and: [{ column: "formId", method: "eq", value: owner.id }],
          },
        },
      }),
    ).toEqual([]);
    expect(publish).not.toHaveBeenCalled();
  } finally {
    await form.delete({ id: owner.id });
  }
});
