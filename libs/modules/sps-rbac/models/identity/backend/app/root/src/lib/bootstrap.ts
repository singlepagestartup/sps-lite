import { Container, ContainerModule, interfaces } from "inversify";
import {
  DI,
  DefaultApp,
  ExceptionFilter,
  DefaultController,
  IDefaultApp,
  IExceptionFilter,
  IDefaultController,
  IDefaultService,
  DefaultService,
  IDatabaseStoreClient,
  IDefaultStore,
  IDefaultRepository,
  DefaultRepository,
  IDefaultEntity,
  DefaultEntity,
} from "@sps/shared-backend-api";
import {
  type SCHEMA,
  Store,
  Database,
} from "@sps/sps-rbac/models/identity/backend/model/root";
import { Table } from "@sps/sps-rbac/models/identity/backend/schema/root";
import { schema } from "@sps/sps-rbac/backend/db/root";
import { Env } from "hono";
import { Controller } from "./controller";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<Env, SCHEMA>>(DI.IApp).to(DefaultApp);
  bind<IDatabaseStoreClient<SCHEMA, typeof schema, typeof Table>>(
    DI.IStoreClient,
  ).to(Database);
  bind<IDefaultController<SCHEMA>>(DI.IController).to(Controller);
  bind<IDefaultStore<SCHEMA>>(DI.IStore).to(Store);
  bind<IDefaultRepository<SCHEMA>>(DI.IRepository).to(
    DefaultRepository<SCHEMA>,
  );
  bind<IDefaultService<SCHEMA>>(DI.IService).to(DefaultService<SCHEMA>);
  bind<IDefaultEntity<SCHEMA>>(DI.IEntity).to(DefaultEntity);
});

export async function bootstrap() {
  const container = new Container({
    skipBaseClassChecks: true,
  });
  container.load(bindings);
  const app = container.get<IDefaultApp<Env>>(DI.IApp);
  await app.init();

  return { app };
}
