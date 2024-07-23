import { Container } from "inversify";
import { Configuration, IConfiguration } from "../../configuration";
import { DI } from "../../di/constants";
import { Database } from ".";
import { IRepository } from "../interface";
import fs from "fs/promises";

const baseConfiguration: IConfiguration["repository"] = {
  type: "database",
  schema: {} as any,
  Table: {} as any,
  selectSchema: {} as any,
  insertSchema: {} as any,
  dump: {
    directory: "test",
    type: "json",
  },
  seed: {
    module: "sps-website-builder",
    name: "widget",
    type: "model",
  },
};

describe("Database", () => {
  describe("dump", () => {
    it("should create files in config.repository.directory", async () => {
      const configuration = new Configuration({
        repository: baseConfiguration,
      });
      const container = new Container();
      container
        .bind<IConfiguration>(DI.IConfiguration)
        .toConstantValue(configuration);
      container.bind<IRepository>(DI.IRepository).to(Database);

      const repository = container.get<IRepository>(DI.IRepository);

      const spys = [
        jest.spyOn(fs, "readdir").mockResolvedValueOnce(["1.json"] as any),
        jest.spyOn(fs, "unlink").mockResolvedValueOnce(undefined as any),
        jest.spyOn(fs, "writeFile").mockResolvedValueOnce(undefined as any),
      ];

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
      spys.forEach((spy) => spy.mockClear());
    });
  });

  describe("seed", () => {
    it("seeding model should create entities from files in config.repository.directory", async () => {
      const configuration = new Configuration({
        repository: {
          ...baseConfiguration,
        },
      });
      const container = new Container();
      container
        .bind<IConfiguration>(DI.IConfiguration)
        .toConstantValue(configuration);
      container.bind<IRepository>(DI.IRepository).to(Database);

      const repository = container.get<IRepository>(DI.IRepository);

      const dumpEntity = { id: 2 };

      const spys = [
        jest.spyOn(fs, "readdir").mockResolvedValueOnce(["2.json"] as any),
        jest
          .spyOn(fs, "readFile")
          .mockResolvedValueOnce(JSON.stringify(dumpEntity)),
        jest.spyOn(repository, "find").mockResolvedValueOnce([]),
        jest.spyOn(repository, "find").mockResolvedValueOnce([]),
        jest.spyOn(repository, "insert").mockResolvedValueOnce(dumpEntity),
        jest
          .spyOn(repository, "deleteFirstByField")
          .mockResolvedValueOnce(undefined),
      ];

      const expectedResult = {
        module: "sps-website-builder",
        name: "widget",
        type: "model",
        seeds: [
          {
            new: dumpEntity,
            dump: dumpEntity,
          },
        ],
      };

      const seedResult = await repository.seed();
      expect(seedResult).toEqual(expectedResult);

      spys.forEach((spy) => spy.mockClear());
    });

    it("seeding model should updates db entities with data from files in config.repository.directory", async () => {
      const dumpEntity = { id: 2, title: "Like in database entity" };
      const databaseEntity = { id: 1, title: "Like in database entity" };

      const configuration = new Configuration({
        repository: {
          ...baseConfiguration,
          seed: {
            ...baseConfiguration.seed,
            filters: [
              {
                column: "title",
                method: "eq",
                transformer: (data) => {
                  return data.entity.dump.title;
                },
              },
            ],
          },
        },
      });
      const container = new Container();
      container
        .bind<IConfiguration>(DI.IConfiguration)
        .toConstantValue(configuration);
      container.bind<IRepository>(DI.IRepository).to(Database);

      const repository = container.get<IRepository>(DI.IRepository);

      const spys = [
        jest.spyOn(fs, "readdir").mockResolvedValueOnce(["2.json"] as any),
        jest
          .spyOn(fs, "readFile")
          .mockResolvedValueOnce(JSON.stringify(dumpEntity)),
        jest
          .spyOn(repository, "find")
          .mockReturnValueOnce([databaseEntity] as any)
          .mockReturnValueOnce([databaseEntity] as any),
        jest.spyOn(repository, "insert").mockResolvedValueOnce(dumpEntity),
        jest.spyOn(repository, "deleteFirstByField"),
        jest
          .spyOn(repository, "updateFirstByField")
          .mockResolvedValueOnce({ ...dumpEntity, id: databaseEntity.id }),
      ];

      const expectedResult = {
        module: "sps-website-builder",
        name: "widget",
        type: "model",
        seeds: [
          {
            dump: dumpEntity,
            new: databaseEntity,
            old: databaseEntity,
          },
        ],
      };

      const seedResult = await repository.seed({ seeds: [] });

      expect(seedResult).toEqual(expectedResult);
      expect(repository.deleteFirstByField).not.toHaveBeenCalled();

      spys.forEach((spy) => spy.mockClear());
    });

    it("seeding relation should create entities from files in config.repository.directory if passed transform parameter", async () => {
      const dumpEntity = { id: 4, widgetId: 4, heroSectionBlockId: 6 };
      const configuration = new Configuration({
        repository: {
          ...baseConfiguration,
          seed: {
            ...baseConfiguration.seed,
            name: "widgets-to-hero-section-blocks",
            module: "sps-website-builder",
            type: "relation",
            transformers: [
              {
                field: "widgetId",
                transform: (data) => {
                  const relationEntites = data.seeds
                    .find(
                      (seed) =>
                        seed.name === "widget" &&
                        seed.type === "model" &&
                        seed.module === "sps-website-builder",
                    )
                    ?.seeds?.filter(
                      (seed) => seed.dump.id === data.entity.dump.widgetId,
                    );
                  return relationEntites?.[0].new.id;
                },
              },
            ],
          },
        },
      });
      const container = new Container();
      container
        .bind<IConfiguration>(DI.IConfiguration)
        .toConstantValue(configuration);
      container.bind<IRepository>(DI.IRepository).to(Database);

      const repository = container.get<IRepository>(DI.IRepository);

      const spys = [
        jest.spyOn(fs, "readdir").mockResolvedValueOnce(["4.json"] as any),
        jest
          .spyOn(fs, "readFile")
          .mockResolvedValueOnce(JSON.stringify(dumpEntity)),
        jest.spyOn(repository, "find").mockReturnValueOnce([
          {
            id: 1,
            widgetId: 2,
            heroSectionBlockId: 3,
          },
        ] as any),
        jest
          .spyOn(repository, "insert")
          .mockResolvedValueOnce({ ...dumpEntity, widgetId: 5 }),
        jest
          .spyOn(repository, "deleteFirstByField")
          .mockReturnValueOnce(undefined as any),
        jest
          .spyOn(repository, "updateFirstByField")
          .mockResolvedValueOnce({ ...dumpEntity, widgetId: 5 }),
      ];

      const seedResults = [
        {
          module: "sps-website-builder",
          name: "widget",
          type: "model",
          seeds: [
            {
              dump: {
                id: 4,
              },
              new: {
                id: 5,
              },
              old: {
                id: 2,
              },
            },
          ],
        },
      ];
      const expectedResult = {
        module: "sps-website-builder",
        name: "widgets-to-hero-section-blocks",
        type: "relation",
        seeds: [
          {
            dump: dumpEntity,
            new: { ...dumpEntity, widgetId: 5 },
          },
        ],
      };
      const seedResult = await repository.seed({ seeds: seedResults });
      expect(seedResult).toEqual(expectedResult);
      spys.forEach((spy) => spy.mockClear());
    });
  });
});
