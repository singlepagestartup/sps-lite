import { Container, ContainerModule, interfaces } from "inversify";
import {
  DI,
  DefaultApp,
  ExceptionFilter,
  DefaultController,
  DefaultRepository,
  DefaultEntity,
  DefaultService,
  type IDefaultApp,
  type IDefaultController,
  type IExceptionFilter,
  type IDefaultService,
  type IDefaultStore,
  type IDefaultRepository,
  type IDefaultEntity,
  type IDatabaseStoreClient,
} from "@sps/shared-backend-api";
import {
  type SCHEMA,
  Store,
  Database,
} from "@sps/sps-rbac/models/authentication-block/backend/model/root";
import { Env } from "hono";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<IDefaultApp<Env, SCHEMA>>(DI.IApp).to(DefaultApp);
  bind<IDefaultController<SCHEMA>>(DI.IController).to(DefaultController);
  bind<IDefaultStore<SCHEMA>>(DI.IStore).to(Store);
  bind<IDefaultRepository<SCHEMA>>(DI.IRepository).to(DefaultRepository);
  bind<IDefaultService<SCHEMA>>(DI.IService).to(DefaultService<SCHEMA>);
  bind<IDefaultEntity<SCHEMA>>(DI.IEntity).to(DefaultEntity);
  bind<IDatabaseStoreClient<SCHEMA, any, any>>(DI.IStoreClient).to(Database);
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
