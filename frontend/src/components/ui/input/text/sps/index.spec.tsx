import "whatwg-fetch";
import React from "react";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import TextInput from "./index";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";

describe("TextInput component", () => {
  it("on type should change value", async () => {
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
        <TextInput variant="text" name="name" placeholder="Type your name" />
      </FormProvider>,
    );

    // screen.debug();

    const nameInput = screen.getByPlaceholderText("Type your name");

    fireEvent.change(nameInput, { target: { value: "John" } });

    watchData = watch();

    expect(watchData).toEqual({
      name: "John",
    });
  });
});
