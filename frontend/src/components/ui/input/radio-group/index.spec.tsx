import "whatwg-fetch";
import React from "react";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import RadioGroupInput from "./index";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";
import { act } from "react-dom/test-utils";

describe("RadioGroupInput component", () => {
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
        <RadioGroupInput
          variant="radio-group"
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
