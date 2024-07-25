import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-file-storage/models/file/backend/repository/database";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Service } from "./service";
import path from "path";
import fs from "fs/promises";

@injectable()
export class Controller extends RESTController<(typeof Table)["$inferSelect"]> {
  service: Service;

  constructor(@inject(DI.IService) service: Service) {
    super(service);
    this.service = service;
    this.bindRoutes([
      {
        method: "GET",
        path: "/",
        handler: this.find,
      },
      {
        method: "GET",
        path: "/:uuid",
        handler: this.findById,
      },
      {
        method: "POST",
        path: "/",
        handler: this.create,
      },
      {
        method: "PATCH",
        path: "/:uuid",
        handler: this.update,
      },
      {
        method: "DELETE",
        path: "/:uuid",
        handler: this.delete,
      },
    ]);
  }

  async create(c: Context, next: any): Promise<Response> {
    if (!c.var.parsedBody) {
      throw new HTTPException(400, {
        message: "Invalid body",
      });
    }

    if (!c.var.parsedBody.files) {
      const entity = await this.service.create({
        data: c.var.parsedBody.data,
      });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    }

    for (const [name, file] of Object.entries(c.var.parsedBody.files)) {
      if (Array.isArray(file)) {
        throw new HTTPException(400, {
          message: "Multiple files are not allowed",
        });
      }

      if (typeof file === "string") {
        throw new HTTPException(400, {
          message: "Invalid file type",
        });
      }

      const buffer = await (file as File).arrayBuffer();

      const root = process.cwd();
      const cuttedStoragePath = "images";
      const storagePath = `public/${cuttedStoragePath}`;

      const data = c.var.parsedBody.data ?? {};
      data[name] = "";
      const createdEntity = await this.service.create({ data });

      const extension = (file as File).name.split(".").pop();

      if (!extension) {
        throw new Error("Invalid file extension");
      }

      const fileName = await this.service.getUniqueFileName({ extension });
      const filePath = path.join(root, storagePath, fileName + "." + extension);

      await fs.writeFile(filePath, Buffer.from(buffer));

      const createdFileUrl = path.join(
        "/",
        cuttedStoragePath,
        fileName + "." + extension,
      );

      data[name] = createdFileUrl;
      const entity = await this.service.update({
        id: createdEntity.id,
        data,
      });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    }

    throw new HTTPException(400, {
      message: "Invalid file",
    });
  }
  catch(error: any) {
    throw new HTTPException(400, {
      message: error.message,
    });
  }
}
