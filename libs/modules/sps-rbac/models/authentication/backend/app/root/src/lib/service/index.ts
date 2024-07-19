import "reflect-metadata";
import { DefaultService, DI } from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { Entity } from "@sps/sps-rbac/models/authentication/backend/model/root";

export interface IService<SCHEMA extends Record<string, unknown>>
  extends DefaultService<SCHEMA> {
  isAuthenticatated(): Promise<any>;
  logout(): Promise<any>;
  providers(): Promise<any>;
}

@injectable()
export class Service<SCHEMA extends Record<string, unknown>>
  extends DefaultService<SCHEMA>
  implements IService<SCHEMA>
{
  constructor(@inject(DI.IEntity) entity: Entity<SCHEMA>) {
    super(entity);
  }

  async isAuthenticatated(): Promise<any> {
    return {
      ok: true,
    };
  }

  async logout(): Promise<any> {
    return {
      ok: true,
    };
  }

  async providers(): Promise<any> {
    return {
      ok: true,
    };
  }
}
