import { IBackendPage } from "types/collection-types";
import { getFiltersFromPageUrl } from ".";

describe("utils/api", () => {
  describe("getFiltersFromPageUrl", () => {
    const scopedPage: IBackendPage = {
      id: 12,
      title: "Article Page",
      url: "/articles/[article.id]",
      createdAt: "2023-11-27T16:30:32.169Z",
      updatedAt: "2023-12-07T10:01:07.283Z",
      publishedAt: "2023-05-07T00:23:27.783Z",
      locale: "en",
      urls: [{ url: "/articles/1", locale: "en" }],
    };

    it("should compare passed params.url with page url and extract filter params from params.url", async () => {
      const page = scopedPage;
      const params = {
        url: ["articles", "1"],
      };
      const filters = getFiltersFromPageUrl({ page, params }); //?

      expect(filters).toEqual([{ article: { id: { $in: ["1"] } } }]);
    });
  });
});
