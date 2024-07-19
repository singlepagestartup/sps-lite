import { Container, ContainerModule, interfaces } from "inversify";
import {
  DI,
  DefaultApp,
  ExceptionFilter,
  DefaultController,
  DefaultService,
  DefaultRepository,
  DefaultEntity,
  type IDefaultApp,
  type IExceptionFilter,
  type IDefaultController,
  type IDefaultService,
  type IDatabaseStoreClient,
  type IDefaultStore,
  type IDefaultRepository,
  type IDefaultEntity,
} from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/subject/backend/schema/root";
import {
  Store,
  Database,
  type SCHEMA,
} from "@sps/sps-rbac/models/subject/backend/model/root";
import { Env } from "hono";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<Env, SCHEMA>>(DI.IApp).to(DefaultApp);
  bind<IDatabaseStoreClient<SCHEMA, typeof schema, typeof Table>>(
    DI.IStoreClient,
  ).to(Database);
  bind<IDefaultController<SCHEMA>>(DI.IController).to(DefaultController);
  bind<IDefaultStore<SCHEMA>>(DI.IStore).to(Store);
  bind<IDefaultRepository<SCHEMA>>(DI.IRepository).to(
    DefaultRepository<SCHEMA>,
  );
  bind<IDefaultService<SCHEMA>>(DI.IService).to(DefaultService<SCHEMA>);
  bind<IDefaultEntity<SCHEMA>>(DI.IEntity).to(DefaultEntity<SCHEMA>);
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
