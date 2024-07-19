import { Container, ContainerModule, interfaces } from "inversify";
import {
  DI,
  DefaultApp,
  ExceptionFilter,
  DefaultController,
  DefaultService,
  DefaultRepository,
  FindByIdHandler,
  FindHandler,
  DefaultEntity,
  type IDefaultEntity,
  type IDefaultApp,
  type IExceptionFilter,
  type IDefaultController,
  type IDefaultService,
  type IDefaultRepository,
  type IDefaultDataStore,
} from "@sps/shared-backend-api";
import { db } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/widget/backend/schema/root";
import {
  DataStore,
  Entity,
  Repository,
} from "@sps/sps-rbac/models/widget/backend/model/root";
import { Env } from "hono";

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<IExceptionFilter>(DI.IExceptionFilter).to(ExceptionFilter);
  bind<
    IDefaultApp<
      Env,
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IApp).to(DefaultApp);
  bind<
    IDefaultController<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IController).to(DefaultController);
  bind<IDefaultDataStore<typeof db, typeof Table>>(DI.IDataStore).to(DataStore);
  bind<IDefaultRepository<typeof db, typeof Table>>(DI.IRepository).to(
    Repository<typeof db, typeof Table>,
  );
  bind<
    IDefaultService<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IService).to(
    DefaultService<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >,
  );
  bind<
    IDefaultEntity<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IEntity).to(
    DefaultEntity<
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >,
  );
});

export async function bootstrap() {
  const container = new Container({
    skipBaseClassChecks: true,
  });
  container.load(bindings);
  const app = container.get<
    IDefaultApp<
      Env,
      typeof db,
      typeof Table,
      Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
    >
  >(DI.IApp);
  // const controller = container.get<
  //   IDefaultController<
  //     typeof db,
  //     typeof Table,
  //     Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
  //   >
  // >(DI.IController);
  // const entity = container.get<
  //   IDefaultEntity<
  //     typeof db,
  //     typeof Table,
  //     Entity<typeof db, typeof Table, (typeof Table)["$inferInsert"]>
  //   >
  // >(DI.IEntity);
  // const r = await entity.find();
  // controller.routes
  // const newEntity = new Entity("lupa");
  // const newItem = repository.create({
  //   sdfs: "sdf",
  // });

  await app.init();

  return { app };
}
