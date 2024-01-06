import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import Button from "./index";
import "@testing-library/jest-dom";

const buttonsVariants = ["text", "primary", "secondary"];

describe("Buttons component", () => {
  buttonsVariants.forEach((variant: any) => {
    it(`${variant} - render <a> if url passed`, async () => {
      render(<Button variant={variant} title="Testing button" url="/" />);

      const linkElement = screen.getByRole("link");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", "/");
      expect(linkElement).toHaveTextContent("Testing button");
    });

    it(`${variant} - render <button> if onClick passed`, async () => {
      const onClick = jest.fn();
      render(
        <Button variant={variant} title="Testing button" onClick={onClick} />,
      );

      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
      buttonElement.click();
      expect(onClick).toHaveBeenCalled();
    });
  });
});
