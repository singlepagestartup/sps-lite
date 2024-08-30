import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/notification/models/template/backend/repository/database";
import { BACKEND_URL } from "@sps/shared-utils";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  async render(params: { id: string; type: "html" }) {
    if (!BACKEND_URL) {
      throw new Error("Backend URL not found");
    }

    const template = await this.findById({
      id: params.id,
    });

    if (!template) {
      throw new Error("Template not found");
    }

    // if (notification.status !== "new") {
    //   return { ok: true };
    // }

    if (params.type === "html") {
      const data = await fetch(
        BACKEND_URL + "/api/html-generator/index.html",
      ).then((res) => res.text());

      return data;
      //   return await this.provider({
      //     provider: "email",
      //     id: params.id,
      //   });
    }

    throw new Error("Passed render type is not supported");
  }
}
