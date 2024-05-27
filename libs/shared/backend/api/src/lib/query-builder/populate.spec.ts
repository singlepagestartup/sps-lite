import { queryBuilder } from "./populate";

describe("Query Builder | Populate", () => {
  it("should take function from passed orderBy method", () => {
    const params = {
      pagesToWidgets: {
        orderBy: {
          column: "orderIndex",
          method: "asc",
        },
      },
    };

    const populateParams = queryBuilder(params as any, "pagesToWidgets");

    expect(typeof populateParams["orderBy"]).toBe("function");
  });
});
