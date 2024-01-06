import { render, screen } from "@testing-library/react";
import Component from "./Component";
import { faker } from "@faker-js/faker";

describe("SimpleCentered", () => {
  it("should render title and description", async () => {
    const title = faker.lorem.words(3);
    const description = faker.lorem.paragraph();

    render(
      <Component
        id={1}
        variant="simple-centered"
        anchor=""
        className=""
        title={title}
        description={description}
        showSkeletons={false}
        __component="page-blocks.hero-section-block"
      />,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
