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
    const body = await c.req.parseBody();

    if (!body) {
      throw new HTTPException(400, {
        message: "Invalid body",
      });
    }

    const parsedBody: {
      data?: {
        [key: string]: any;
      };
      files?: {
        [key: string]: File;
      };
    } = {};

    Object.keys(body).forEach((key) => {
      if (body[key] instanceof File) {
        const file = body[key] as File;

        if (!parsedBody.files) {
          parsedBody.files = {};
        }

        parsedBody.files = {
          ...parsedBody.files,
          [key]: file,
        };
      }
    });

    if (!parsedBody.files) {
      const entity = await this.service.create({
        data: parsedBody.data,
      });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    }

    if (body?.["data"]) {
      if (typeof body["data"] === "string") {
        parsedBody.data = JSON.parse(body["data"]);
      }
    }

    for (const [name, file] of Object.entries(parsedBody.files)) {
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

      const data: any = parsedBody.data ?? {};
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

  async update(c: Context, next: any): Promise<Response> {
    const uuid = c.req.param("uuid");

    if (!uuid) {
      return c.json(
        {
          message: "Invalid id",
        },
        {
          status: 400,
        },
      );
    }

    const body = await c.req.parseBody();

    if (!body) {
      throw new HTTPException(400, {
        message: "Invalid body",
      });
    }

    const parsedBody: {
      data?: {
        [key: string]: any;
      };
      files?: {
        [key: string]: File;
      };
    } = {};

    Object.keys(body).forEach((key) => {
      if (body[key] instanceof File) {
        const file = body[key] as File;

        if (!parsedBody.files) {
          parsedBody.files = {};
        }

        parsedBody.files = {
          ...parsedBody.files,
          [key]: file,
        };
      }
    });

    if (body?.["data"]) {
      if (typeof body["data"] === "string") {
        parsedBody.data = JSON.parse(body["data"]);
      }
    }

    if (!parsedBody.files) {
      const entity = await this.service.create({
        data: parsedBody.data,
      });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    }

    for (const [name, file] of Object.entries(parsedBody.files)) {
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

      const extension = file.name.split(".").pop();

      if (!extension) {
        throw new Error("Invalid file extension");
      }

      const root = process.cwd();
      const cuttedStoragePath = "images";
      const storagePath = `public/${cuttedStoragePath}`;

      const fileName = await this.service.getUniqueFileName({ extension });
      const filePath = path.join(root, storagePath, fileName + "." + extension);

      await fs.writeFile(filePath, Buffer.from(buffer));

      const createdFileUrl = path.join(
        "/",
        cuttedStoragePath,
        fileName + "." + extension,
      );

      const data: any = parsedBody.data ?? {};
      data[name] = createdFileUrl;

      const previous = await this.service.findById({ id: uuid });

      const entity = await this.service.update({ id: uuid, data });

      if (previous?.file) {
        const root = process.cwd();
        const filePath = path.join(root, "public", previous.file);

        try {
          await fs.unlink(filePath);
        } catch (error: any) {
          console.error("error", error.toString());
        }
      }

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
