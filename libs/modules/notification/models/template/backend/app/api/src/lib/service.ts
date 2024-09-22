import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/notification/models/template/backend/repository/database";
import { BACKEND_URL } from "@sps/shared-utils";
import QueryString from "qs";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  async render(params: { id: string; type: "html"; payload?: any }) {
    if (!BACKEND_URL) {
      throw new Error("Backend URL not found");
    }

    const template = await this.findById({
      id: params.id,
    });

    if (!template) {
      throw new Error("Template not found");
    }

    if (params.type === "html") {
      const query = QueryString.stringify(
        {
          variant: template.variant,
          data: params?.payload,
        },
        {
          encodeValuesOnly: true,
        },
      );

      const data = await fetch(
        BACKEND_URL + "/api/html-generator/index.html?" + query,
      ).then((res) => res.text());

      return data;
    }

    throw new Error("Passed render type is not supported");
  }
}
