import { renderHook, waitFor } from "@testing-library/react";
import * as nextNavigation from "next/navigation";
import QueryString from "qs";
import { useGetPageUrlFiltersQuery } from ".";
// import { ReduxProvider } from "../../redux/index";
import { setupServer } from "msw/node";
import { BACKEND_URL } from "@sps/shared-frontend-utils-client";
import { HttpResponse, http } from "msw";
// import type { IModel as IBackendApiPage } from "@sps/sps-website-builder-frontend/lib/redux/entities/page/interfaces";

type IBackendApiPage = any;

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    ...jest.requireActual("next/navigation"),
  };
});

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

const server = setupServer(
  http.get(
    `${BACKEND_URL}/api/sps-website-builder/pages/get-by-url`,
    ({ request }) => {
      return HttpResponse.json({
        data: scopedPage,
      });
    },
  ),
);

describe("useGetPageUrlFiltersQuery", () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });

  it("should return model filters depends on page /smtng/[model.id]", async () => {
    const useParams = jest.spyOn(nextNavigation, "useParams");
    useParams.mockImplementation(() => {
      return {
        locale: "en",
        url: ["articles", "1"],
      };
    });
    const { result } = renderHook(() => useGetPageUrlFiltersQuery(), {
      // wrapper: ({ children }) => {
      //   return <ReduxProvider>{children}</ReduxProvider>;
      // },
    });

    await waitFor(() => {
      expect(result.current).toEqual({
        $and: [{ article: { id: { $in: ["1"] } } }],
      });
    });

    useParams.mockRestore();
  });
});
