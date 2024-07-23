import { Container } from "inversify";
import { IConfiguration } from "../../configuration";
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

describe("Database", () => {
  const container = new Container();
  const mockedPgTableWithColumns = {
    _: {
      inferSelect: {},
      inferInsert: {},
    },
  } as PgTableWithColumns<any>;
  const ConfigurationMock: IConfiguration = {
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
    },
  } as IConfiguration;

  let configuration: IConfiguration;
  let repository: IRepository;

  beforeAll(() => {
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
      fs.writeFile = jest.fn().mockReturnValue(undefined);

      const repositoryEntity = {
        id: 2,
      };

      repository.find = jest.fn().mockReturnValueOnce([repositoryEntity]);

      const dumpResult = await repository.dump();

      expect(true).toBe(true);
      expect(fs.unlink).toHaveBeenCalledWith("test/1.json");
      expect(fs.writeFile).toHaveBeenCalledWith(
        "test/2.json",
        JSON.stringify(repositoryEntity, null, 2),
      );
      expect(dumpResult).toEqual([repositoryEntity]);
    });
  });

  describe("seed", () => {
    it("should create entities from files in config.repository.directory", async () => {
      const dumpEntity = { id: 2 };
      fs.readdir = jest.fn().mockReturnValueOnce(["2.json"]);
      fs.readFile = jest.fn().mockReturnValueOnce(JSON.stringify(dumpEntity));

      repository.deleteFirstByField = jest.fn().mockReturnValueOnce(undefined);
      repository.find = jest.fn().mockReturnValueOnce([
        {
          id: 1,
        },
      ]);
      repository.insert = jest.fn().mockResolvedValue(dumpEntity);

      const expectedResult = {
        module: "sps-website-builder",
        name: "widget",
        type: "model",
        seeds: [
          {
            new: dumpEntity,
          },
        ],
      };

      const seedResult = await repository.seed();
      console.log(`🚀 ~ it ~ seedResult:`, seedResult);

      expect(true).toBe(true);
      expect(seedResult).toEqual(expectedResult);
    });
  });
});
