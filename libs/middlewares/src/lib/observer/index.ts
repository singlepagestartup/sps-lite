import { HOST_URL, RBAC_SECRET_KEY } from "@sps/shared-utils";
import { MiddlewareHandler } from "hono";
import { createMiddleware } from "hono/factory";
import { api as channelApi } from "@sps/broadcast/models/channel/sdk/server";
import { api as channelsToMessagesApi } from "@sps/broadcast/relations/channels-to-messages/sdk/server";
import { api as messagesApi } from "@sps/broadcast/models/message/sdk/server";

export type IMiddlewareGeneric = unknown;

export class Middleware {
  constructor() {}

  init(): MiddlewareHandler<any, any, {}> {
    return createMiddleware(async (c, next) => {
      const path = c.req.path;
      const method = c.req.method;

      await next();

      if (path.includes("/api/broadcast")) {
        return;
      }

      if (c.res.status >= 200 && c.res.status < 300) {
        if (!RBAC_SECRET_KEY) {
          throw Error(
            "RBAC_SECRET_KEY is not defined, broadcast middleware 'revalidation' can't request to service.",
          );
        }

        const observerChannels = await channelApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "title",
                  method: "eq",
                  value: "observer",
                },
              ],
            },
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
            next: {
              cache: "no-store",
            },
          },
        });

        if (!observerChannels?.length) {
          return;
        }

        const channelsToMessages = await channelsToMessagesApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "channelId",
                  method: "inArray",
                  value: observerChannels.map((channel) => channel.id),
                },
              ],
            },
          },
        });

        if (!channelsToMessages?.length) {
          return;
        }

        const messages = await messagesApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "id",
                  method: "inArray",
                  value: channelsToMessages?.map(
                    (channelToMessage) => channelToMessage.messageId,
                  ),
                },
                {
                  column: "payload",
                  method: "like",
                  value: `%${path}%`,
                },
                {
                  column: "payload",
                  method: "ilike",
                  value: `%${method}%`,
                },
              ],
            },
          },
        });

        if (messages?.length) {
          for (const message of messages) {
            const payload = JSON.parse(message.payload);

            if (
              payload.action.method === method &&
              payload.action.path === path
            ) {
              await fetch(HOST_URL + payload.callback.path, {
                method: payload.callback.method,
                headers: {
                  "Content-Type": "application/json",
                  ...payload.callback.headers,
                },
                body: JSON.stringify(payload.callback.body),
              }).then(async (res) => {
                if (res.status >= 200 && res.status < 300) {
                  if (!RBAC_SECRET_KEY) {
                    throw Error(
                      "RBAC_SECRET_KEY is not defined, broadcast middleware 'revalidation' can't request to service.",
                    );
                  }

                  await messagesApi.delete({
                    id: message.id,
                    options: {
                      headers: {
                        "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                      },
                      next: {
                        cache: "no-store",
                      },
                    },
                  });
                }
              });
            }
          }
        }
      }
    });
  }
}
