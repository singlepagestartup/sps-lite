import { Container } from "inversify";
import { Configuration, IConfiguration } from "../../configuration";
import { DI } from "../../di/constants";
import { Database } from ".";
import { IRepository } from "../interface";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import fs from "fs/promises";

jest.mock("fs/promises");
jest.mock("drizzle-orm/postgres-js");
// jest.mock(
//   "postgres",
//   jest.fn().mockImplementation(() => {
//     return jest.fn();
//   }),
// );

const mockedPgTableWithColumns = {
  _: {
    inferSelect: {},
    inferInsert: {},
  },
} as PgTableWithColumns<any>;
const ConfigurationMock: IConfiguration = {
  get: jest.fn(),
  repository: {
    schema: {},
    Table: mockedPgTableWithColumns,
    selectSchema: mockedPgTableWithColumns.$inferSelect,
    insertSchema: mockedPgTableWithColumns.$inferInsert,
    dump: {
      directory: "test",
      type: "json",
    },
    seed: {
      module: "sps-website-builder",
      name: "widget",
      type: "model",
    },
  } as any,
};

describe("Database", () => {
  const container = new Container();
  let configuration: IConfiguration;
  let repository: IRepository;

  beforeEach(() => {
    container
      .bind<IConfiguration>(DI.IConfiguration)
      .toConstantValue(ConfigurationMock);
    container.bind<IRepository>(DI.IRepository).to(Database);

    configuration = container.get(DI.IConfiguration);
    repository = container.get(DI.IRepository);
  });

  describe("dump", () => {
    it("should create files in config.repository.directory", async () => {
      fs.readdir = jest.fn().mockReturnValueOnce(["1.json"]);
      fs.unlink = jest.fn().mockReturnValueOnce(undefined);
      fs.writeFile = jest.fn().mockReturnValueOnce(undefined);

      const repositoryEntity = {
        id: 2,
      };

      repository.find = jest.fn().mockReturnValueOnce([repositoryEntity]);

      const dumpResult = await repository.dump();

      expect(fs.unlink).toHaveBeenCalledWith("test/1.json");
      expect(fs.writeFile).toHaveBeenCalledWith(
        "test/2.json",
        JSON.stringify(repositoryEntity, null, 2),
      );
      expect(dumpResult).toEqual([repositoryEntity]);
    });
  });

  describe("seed", () => {
    // it("seeding model should create entities from files in config.repository.directory", async () => {
    //   const dumpEntity = { id: 2 };
    //   const spys = [
    //     jest.spyOn(fs, "readdir").mockResolvedValueOnce(["2.json"] as any),
    //     jest
    //       .spyOn(fs, "readFile")
    //       .mockResolvedValueOnce(JSON.stringify(dumpEntity)),
    //     jest.spyOn(repository, "find").mockResolvedValueOnce([]),
    //     jest.spyOn(repository, "find").mockResolvedValueOnce([]),
    //     jest.spyOn(repository, "insert").mockResolvedValueOnce(dumpEntity),
    //     jest
    //       .spyOn(repository, "deleteFirstByField")
    //       .mockResolvedValueOnce(undefined),
    //   ];
    //   const expectedResult = {
    //     module: "sps-website-builder",
    //     name: "widget",
    //     type: "model",
    //     seeds: [
    //       {
    //         new: dumpEntity,
    //         dump: dumpEntity,
    //       },
    //     ],
    //   };
    //   const seedResult = await repository.seed();
    //   expect(seedResult).toEqual(expectedResult);
    //   spys.forEach((spy) => spy.mockClear());
    // });
    // it("seeding model should updates db entities with data from files in config.repository.directory", async () => {
    //   const dumpEntity = { id: 2, title: "Like in database entity" };
    //   const databaseEntity = { id: 1, title: "Like in database entity" };
    //   const spys = [
    //     jest.spyOn(fs, "readdir").mockResolvedValueOnce(["2.json"] as any),
    //     jest
    //       .spyOn(fs, "readFile")
    //       .mockResolvedValueOnce(JSON.stringify(dumpEntity)),
    //     jest
    //       .spyOn(repository, "find")
    //       .mockReturnValueOnce([databaseEntity] as any)
    //       .mockReturnValueOnce([databaseEntity] as any),
    //     jest.spyOn(repository, "insert").mockResolvedValueOnce(dumpEntity),
    //     jest.spyOn(repository, "deleteFirstByField"),
    //     jest
    //       .spyOn(repository, "updateFirstByField")
    //       .mockResolvedValueOnce({ ...dumpEntity, id: databaseEntity.id }),
    //   ];
    //   configuration.repository.seed.filters = [
    //     {
    //       column: "title",
    //       method: "eq",
    //       transformer: (data) => {
    //         return data.entity.dump.title;
    //       },
    //     },
    //   ];
    //   const expectedResult = {
    //     module: "sps-website-builder",
    //     name: "widget",
    //     type: "model",
    //     seeds: [
    //       {
    //         dump: dumpEntity,
    //         new: databaseEntity,
    //         old: databaseEntity,
    //       },
    //     ],
    //   };
    //   const seedResult = await repository.seed();
    //   expect(seedResult).toEqual(expectedResult);
    //   expect(repository.deleteFirstByField).not.toHaveBeenCalled();
    //   spys.forEach((spy) => spy.mockClear());
    // });
    // it("seeding relation should create entities from files in config.repository.directory if passed transform parameter", async () => {
    //   const dumpEntity = { id: 4, widgetId: 4, heroSectionBlockId: 6 };
    //   const spys = [
    //     jest.spyOn(fs, "readdir").mockResolvedValueOnce(["4.json"] as any),
    //     jest
    //       .spyOn(fs, "readFile")
    //       .mockResolvedValueOnce(JSON.stringify(dumpEntity)),
    //     jest.spyOn(repository, "find").mockReturnValueOnce([
    //       {
    //         id: 1,
    //         widgetId: 2,
    //         heroSectionBlockId: 3,
    //       },
    //     ] as any),
    //     jest
    //       .spyOn(repository, "insert")
    //       .mockResolvedValueOnce({ ...dumpEntity, widgetId: 5 }),
    //     jest
    //       .spyOn(repository, "deleteFirstByField")
    //       .mockReturnValueOnce(undefined as any),
    //     jest
    //       .spyOn(repository, "updateFirstByField")
    //       .mockResolvedValueOnce({ ...dumpEntity, widgetId: 5 }),
    //   ];
    //   configuration.repository.seed.name = "widgets-to-hero-section-blocks";
    //   configuration.repository.seed.type = "relation";
    //   configuration.repository.seed.transformers = [
    //     {
    //       field: "widgetId",
    //       transform: (data) => {
    //         const relationEntites = data.seeds
    //           .find(
    //             (seed) =>
    //               seed.name === "widget" &&
    //               seed.type === "model" &&
    //               seed.module === "sps-website-builder",
    //           )
    //           ?.seeds?.filter(
    //             (seed) => seed.dump.id === data.entity.dump.widgetId,
    //           );
    //         return relationEntites?.[0].new.id;
    //       },
    //     },
    //   ];
    //   const seedResults = [
    //     {
    //       module: "sps-website-builder",
    //       name: "widget",
    //       type: "model",
    //       seeds: [
    //         {
    //           dump: {
    //             id: 4,
    //           },
    //           new: {
    //             id: 5,
    //           },
    //           old: {
    //             id: 2,
    //           },
    //         },
    //       ],
    //     },
    //   ];
    //   const expectedResult = {
    //     module: "sps-website-builder",
    //     name: "widgets-to-hero-section-blocks",
    //     type: "relation",
    //     seeds: [
    //       {
    //         dump: dumpEntity,
    //         new: { ...dumpEntity, widgetId: 5 },
    //       },
    //     ],
    //   };
    //   const seedResult = await repository.seed({ seeds: seedResults });
    //   expect(seedResult).toEqual(expectedResult);
    //   spys.forEach((spy) => spy.mockClear());
    // });
  });
});
