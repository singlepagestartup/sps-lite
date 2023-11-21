import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("components/Card", () => {
  it("should show default empty component", () => {
    const config = {
      showSkeletons: false,
      cardsConfig: {
        Comp: () => {
          return <></>;
        },
        SkeletonComp: () => {
          return <></>;
        },
      },
      items: [],
    };
    render(<Card variant="simple" {...config} />);
    screen.getByText("There are no items");
  });

  it("should show passed component", () => {
    const config = {
      showSkeletons: false,
      cardsConfig: {
        Comp: () => {
          return <div>Passed component</div>;
        },
        SkeletonComp: () => {
          return <></>;
        },
      },
      items: [{ id: 1 }],
    };

    render(<Card variant="simple" {...config} />);
    screen.getByText("Passed component");
  });

  it("should show skeleton component", () => {
    const config = {
      showSkeletons: true,
      cardsConfig: {
        Comp: () => {
          return <></>;
        },
      },
      items: [{ id: 1 }],
    };

    render(<Card variant="simple" {...config} />);
    // get by class className="default-skeleton-card"
    expect(
      document.querySelector(".default-skeleton-card"),
    ).toBeInTheDocument();
  });

  it("should show passed skeleton component", async () => {
    const emptyLength = 10;
    const config = {
      showSkeletons: true,
      cardsConfig: {
        emptyLength,
        Comp: () => {
          return <></>;
        },
        SkeletonComp: () => {
          return <div>Passed skeleton component</div>;
        },
      },
      items: [{ id: 1 }],
    };

    render(<Card variant="simple" {...config} />);
    const skeletons = await screen.findAllByText("Passed skeleton component");
    expect(skeletons.length).toBe(emptyLength);
  });

  it("should show passed empty component", () => {
    const config = {
      showSkeletons: false,
      cardsConfig: {
        Comp: () => {
          return <></>;
        },
        EmptyComp: () => {
          return <div>Passed empty component</div>;
        },
      },
      items: [],
    };

    render(<Card variant="simple" {...config} />);
    screen.getByText("Passed empty component");
  });
});
