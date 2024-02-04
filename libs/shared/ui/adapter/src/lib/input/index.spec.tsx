import "whatwg-fetch";
import React from "react";
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import Input from ".";
import "@testing-library/jest-dom";
import { FormProvider, useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";
// @ts-ignore
import imageFile from "./preview.jpg";

const ui = ["sps", "shadcn"] as const;
// const ui = ["sps"] as const;
// const ui = ["shadcn"] as const;

describe("Input component", () => {
  describe("text", () => {
    ui.forEach((ui) => {
      it("on type should change form value", async () => {
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
            <Input
              ui={ui}
              type="text"
              name="title"
              placeholder="Type article title"
            />
          </FormProvider>,
        );

        // screen.debug();

        const nameInput = screen.getByPlaceholderText("Type article title");

        fireEvent.change(nameInput, { target: { value: "John Doe" } });

        watchData = watch(); //?

        expect(watchData).toEqual({
          title: "John Doe",
        });
      });
    });
  });

  describe("select", () => {
    ui.forEach((ui) => {
      it("on select options should change form value", async () => {
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
            <Input
              ui={ui}
              type="select"
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

        await screen.findByText("Select category");

        expect(screen.getByText("Select category")).toBeInTheDocument();

        act(() => {
          screen.getByText("Select category").click();
        });

        if (ui === "shadcn") {
          const element = screen.getByText("Select category").parentElement;
          if (element) {
            await userEvent.click(element, {
              pointerState: await userEvent.pointer({
                target: element,
              }),
            });
          }
        }

        // screen.debug();

        await screen.findByText("Phones");

        expect(await screen.findByText("Phones")).toBeDefined();

        act(() => {
          screen.getByText("Phones").click();
        });

        if (ui === "shadcn") {
          const element = screen.getByText("Phones").parentElement;
          if (element) {
            await userEvent.click(element, {
              pointerState: await userEvent.pointer({
                target: element,
              }),
            });
          }
        }

        watchData = watch();

        expect(watchData).toEqual({
          category: { title: "Phones" },
        });
      });
    });
  });

  describe("radio", () => {
    ui.forEach((ui) => {
      it("on select options should change form value", async () => {
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
            <Input
              ui={ui}
              type="radio"
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

        // screen.debug();

        watchData = watch();

        expect(watchData).toEqual({
          category: { title: "Phones" },
        });
      });
    });
  });

  describe("checkbox", () => {
    ui.filter((u) => u === "shadcn").forEach((ui) => {
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
            <Input ui={ui} type="checkbox" name="agreement" label="I agree" />
          </FormProvider>,
        );

        // screen.debug();

        await screen.findByText("I agree");

        expect(await screen.findByText("I agree")).toBeDefined();

        act(() => {
          screen.getByText("I agree").click();
        });

        // screen.debug();

        watchData = watch();

        expect(watchData).toEqual({
          agreement: true,
        });
      });
    });
  });

  describe("file", () => {
    ui.filter((u) => u === "shadcn").forEach((ui) => {
      window.URL.createObjectURL = jest.fn();

      it("on type should change value", async () => {
        // const file = new File(["hello"], "hello.png", {
        //   type: "image/png",
        // }) as any;
        const file = imageFile;

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
            <Input
              ui={ui}
              type="file"
              name="design"
              label="Design file"
              placeholder="Select design file"
              multiple={false}
            />
          </FormProvider>,
        );

        // screen.debug(); //?

        await screen.findByText("Select design file");

        const inputElement = screen.getByTestId("design");

        await userEvent.upload(inputElement, file as any);

        // screen.debug(); //?

        watchData = watch();

        expect(watchData.files?.design?.length).toEqual(1);
      });
    });
  });
});
