import { renderHook } from "@testing-library/react";
import { usePathname } from "next/navigation";
import useGetButtonParams from ".";

jest.mock("next/navigation", () => {
  return {
    useSearchParams: jest.fn(),
    usePathname: jest.fn(() => "/"),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("useGetButtonParams", () => {
  it("should return the provided additional attributes, url and isActive state", () => {
    const additionalAttributes = { target: "_blank" };
    const url = "/about";

    const { result } = renderHook(() =>
      useGetButtonParams({ additionalAttributes, url }),
    );

    expect(result.current).toEqual({
      additionalAttributes,
      url: { pathname: "/about" },
      isActive: false,
    });
  });

  it("should return isActive true if the url is the same as the current pathname", () => {
    const mockedUsePathname = jest.mocked(usePathname);
    mockedUsePathname.mockImplementation(() => "/about/");

    const additionalAttributes = { target: "_blank" };
    const url = "/about";

    const { result } = renderHook(() =>
      useGetButtonParams({ additionalAttributes, url }),
    );

    expect(result.current.isActive).toBe(true);
  });

  it("should prepare query params", () => {
    const additionalAttributes = { target: "_blank" };
    const url = "/about?category=js&type=longread";

    const { result } = renderHook(() =>
      useGetButtonParams({ additionalAttributes, url }),
    );

    expect(result.current).toEqual({
      additionalAttributes,
      url: { pathname: "/about", query: { category: "js", type: "longread" } },
      isActive: false,
    });
  });
});
