import "whatwg-fetch";
import React from "react";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import ListboxInput from "./index";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";
import { act } from "react-dom/test-utils";

describe("Listbox component", () => {
  it("select option on click", async () => {
    const { result } = renderHook(() =>
      useForm<any>({
        mode: "all",
      }),
    );

    const methods = result.current;

    const { watch } = methods;

    let watchData = watch();

    render(
      <FormProvider {...methods}>
        <ListboxInput
          variant="listbox"
          name="category"
          placeholder="Select category"
          options={[
            {
              title: "Phones",
            },
            {
              title: "Laptops",
            },
          ]}
        />
      </FormProvider>,
    );

    // screen.debug();

    expect(screen.getByText("Select category")).toBeInTheDocument();

    act(() => {
      screen.getByText("Select category").click();
    });

    await screen.findByText("Phones");

    expect(await screen.findByText("Phones")).toBeDefined();

    act(() => {
      screen.getByText("Phones").click();
    });

    watchData = watch();

    expect(watchData).toEqual({
      category: { title: "Phones" },
    });
  });
});
