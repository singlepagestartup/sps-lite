import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/notification/models/notification/backend/repository/database";
import { AWS } from "@sps/shared-third-parties";
import { api } from "@sps/notification/models/notification/sdk/server";
import { SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  async provider(props: { provider: "email"; id: string }) {
    try {
      if (!SPS_RBAC_SECRET_KEY) {
        throw new Error("Secret key not found");
      }

      const notification = await this.findById({
        id: props.id,
      });

      if (!notification) {
        throw new Error("Notification not found");
      }

      if (!notification.reciever) {
        throw new Error("Reciever not found");
      }

      if (!notification.content) {
        throw new Error("Content not found");
      }

      const attachments =
        notification.attachments?.split(",")?.map((attachment) => {
          return attachment.trim();
        }) || [];

      const aws = new AWS();

      await aws.ses.sendEmail({
        to: notification.reciever,
        subject: notification.title || "Notification from Single Page Startup",
        html: notification.content,
        from: "no-reply@mail.singlepagestartup.com",
        filePaths: attachments,
      });

      await api.update({
        id: props.id,
        data: {
          ...notification,
          status: "sent",
        },
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
          },
          next: {
            cache: "no-store",
          },
        },
      });

      return { ok: true };
    } catch (error: any) {
      throw new Error(error.message, error.stack);
    }
  }

  async send(params: { id: string }) {
    const notification = await this.findById({
      id: params.id,
    });

    if (!notification) {
      throw new Error("Notification not found");
    }

    if (notification.status !== "new") {
      return { ok: true };
    }

    if (notification.method === "email") {
      return await this.provider({
        provider: "email",
        id: params.id,
      });
    }

    throw new Error("Provider not found");
  }
}
