import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import Buttons from "./index";
import "@testing-library/jest-dom";

describe("Buttons component", () => {
  it("render <a> if url passed", async () => {
    render(<Buttons variant="secondary" title="Testing button" url="/" />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it.only("render <button> if onClick passed", async () => {
    const onClick = jest.fn();
    render(
      <Buttons variant="secondary" title="Testing button" onClick={onClick} />,
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });
});
