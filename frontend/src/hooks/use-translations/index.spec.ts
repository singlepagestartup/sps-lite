import { renderHook, waitFor } from "@testing-library/react";
import useTranslations from ".";
import * as nextNavigation from "next/navigation";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    ...jest.requireActual("next/navigation"),
  };
});

jest.mock("../../../translations/en.json", () => {
  return {
    "Hello from file": "Hello",
  };
});

describe("useTranslations", () => {
  it("should return translated text based on url", async () => {
    const useParams = jest.spyOn(nextNavigation, "useParams");
    useParams.mockImplementation(() => {
      return {
        locale: "en",
        url: ["articles", "1"],
      };
    });

    const { result } = renderHook(() => {
      return useTranslations();
    }); //?

    await waitFor(() => {
      const translate = result.current("Hello from file"); //?
      expect(translate).toEqual("Hello");
    });

    useParams.mockRestore();
  });
});
