import { getBackendData, getFiltersFromPageUrl, getTargetPage } from "./";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import Pako from "pako";
import QueryString from "qs";
import { BACKEND_URL } from "../envs";

type IBackendApiPage = any;

const scopedPage: IBackendApiPage = {
  id: 12,
  title: "Article Page",
  url: "/articles/[article.id]",
  createdAt: "2023-11-27T16:30:32.169Z",
  updatedAt: "2023-12-07T10:01:07.283Z",
  publishedAt: "2023-05-07T00:23:27.783Z",
  locale: "en",
  urls: [{ url: "/articles/1", locale: "en" }],
};

describe("utils/api", () => {
  describe("getBackendData", () => {
    it("should return data from backend", async () => {
      const page = { ...scopedPage };

      const server = setupServer(
        http.get(
          `${BACKEND_URL}/api/sps-website-builder/pages`,
          ({ request }) => {
            return HttpResponse.json({
              data: [page],
            });
          },
        ),
      );
      server.listen();

      const result = await getBackendData({
        url: `${BACKEND_URL}/api/sps-website-builder/pages`,
      }); //?

      expect(result).toEqual([page]);
      server.close();
    });

    it("should compress query with gzip and get data from backend", async () => {
      const expectedQuery = "H4sIAAAAAAAAAyvILyjNSSxJtVU1cgQAKOJGawwAAAA=";
      let query = "";
      const page = { ...scopedPage };

      const server = setupServer(
        http.get(
          `${BACKEND_URL}/api/sps-website-builder/pages`,
          ({ request }) => {
            request.url.split("?")[1]; //?
            query = request.url.split("?")[1];

            return HttpResponse.json({
              data: [page],
            });
          },
        ),
      );
      server.listen();

      const result = await getBackendData({
        url: `${BACKEND_URL}/api/sps-website-builder/pages`,
        params: {
          populate: "*",
        },
      }); //?

      expect(result).toEqual([page]);
      expect(query).toEqual(expectedQuery);
      server.close();
    });
  });

  describe("getTargetPage", () => {
    it("should ", async () => {
      const page = { ...scopedPage };
      let backendParams = {};
      const server = setupServer(
        http.get(
          `${BACKEND_URL}/api/sps-website-builder/pages/get-by-url`,
          ({ request }) => {
            const query = request.url.split("?")[1]; //?
            const compressedData = Buffer.from(query, "base64");
            const originalData = Pako.ungzip(compressedData); //?
            const originalString = new TextDecoder().decode(originalData); //?
            const params = QueryString.parse(originalString); //?
            backendParams = params;

            return HttpResponse.json({
              data: page,
            });
          },
        ),
      );
      server.listen();

      const result = await getTargetPage({
        url: ["articles", "1"],
        locale: "en",
      }); //?

      expect(result).toEqual(page);
      expect(backendParams).toEqual({
        url: "/articles/1",
        locale: "en",
        pagination: { limit: "-1" },
      });
      server.close();
    });
  });

  describe("getFiltersFromPageUrl", () => {
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
