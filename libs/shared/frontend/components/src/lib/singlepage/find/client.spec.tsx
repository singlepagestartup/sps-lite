/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
jest.mock("client-only", () => ({}));
import { Component } from "./client";

it("retains mounted records during background fetching when the reader opts in", () => {
  const find = jest.fn(() => ({
    data: [{ id: "reply" }],
    isFetching: false,
    isLoading: false,
  }));
  const props: any = {
    api: { find },
    variant: "find",
    keepDataWhileFetching: true,
    children: ({ data }: any) => <div data-testid="reply">{data[0].id}</div>,
  };
  const { rerender } = render(<Component {...props} />);
  const row = screen.getByTestId("reply");
  find.mockReturnValue({
    data: [{ id: "reply" }],
    isFetching: true,
    isLoading: false,
  });
  rerender(<Component {...props} />);
  expect(screen.getByTestId("reply")).toBe(row);
  rerender(<Component {...props} keepDataWhileFetching={false} />);
  expect(screen.queryByTestId("reply")).toBeNull();
});
