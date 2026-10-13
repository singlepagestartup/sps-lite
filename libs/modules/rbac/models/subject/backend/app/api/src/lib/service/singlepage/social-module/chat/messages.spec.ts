const readFiles = jest.fn();
jest.mock("@sps/file-storage/models/file/sdk/server", () => ({
  api: { find: (...args: unknown[]) => readFiles(...args) },
}));
jest.mock("@sps/shared-utils", () => ({
  RBAC_SECRET_KEY: "internal-test-key",
}));
import { Service } from "./messages";

beforeEach(() => readFiles.mockReset());
it("returns authors and all ordered attachments only for the authorized messages", async () => {
  const authors = {
    find: jest
      .fn()
      .mockResolvedValue([{ messageId: "message", profileId: "owner" }]),
  };
  const links = {
    find: jest.fn().mockResolvedValue([
      {
        messageId: "message",
        fileStorageModuleFileId: "second",
        orderIndex: 1,
      },
      { messageId: "message", fileStorageModuleFileId: "first", orderIndex: 0 },
    ]),
  };
  readFiles.mockResolvedValue([{ id: "first" }, { id: "second" }]);
  const result = await new Service({
    socialModule: {
      profilesToMessages: authors,
      messagesToFileStorageModuleFiles: links,
    },
  } as any).enrich([{ id: "message", description: "hello" }] as any);
  expect(result[0].authorProfileIds).toEqual(["owner"]);
  expect(result[0].attachments?.map((f) => f.id)).toEqual(["first", "second"]);
  expect(authors.find).toHaveBeenCalledWith({
    params: {
      filters: {
        and: [{ column: "messageId", method: "inArray", value: ["message"] }],
      },
    },
  });
  expect(readFiles).toHaveBeenCalledWith(
    expect.objectContaining({
      params: {
        filters: {
          and: [
            { column: "id", method: "inArray", value: ["second", "first"] },
          ],
        },
      },
    }),
  );
});

it("does not enumerate authors or files for an empty chat", async () => {
  const result = await new Service({ socialModule: {} } as any).enrich([]);
  expect(result).toEqual([]);
  expect(readFiles).not.toHaveBeenCalled();
});
