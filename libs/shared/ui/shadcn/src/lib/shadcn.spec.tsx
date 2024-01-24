import { render } from "@testing-library/react";

import Shadcn from "./shadcn";

describe("Shadcn", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Shadcn />);
    expect(baseElement).toBeTruthy();
  });
});
