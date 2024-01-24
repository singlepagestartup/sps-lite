import { renderHook } from "@testing-library/react";
import useGetPreparedFormInputs from ".";
import * as nextNavigation from "next/navigation";
import QueryString from "qs";
import { IEntity as IBackendForm } from "~redux/services/backend/extensions/sps-crm/api/form/interfaces";
import { IComponent as IBackendComponentInput } from "~redux/services/backend/components/elements/input/interfaces";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    ...jest.requireActual("next/navigation"),
  };
});

describe("useGetPreparedFormInputs", () => {
  const scopedForm: IBackendForm = {
    id: 1,
    className: null,
    additionalAttributes: null,
    variant: "simple",
    uid: "question",
    title: "Product questions",
    createdAt: "2023-11-27T16:30:31.921Z",
    updatedAt: "2023-11-27T16:30:34.082Z",
    publishedAt: "2023-05-07T00:12:07.002Z",
    locale: "en",
    inputs: [],
  };

  it("shoul return prepared inputs array with text input field", async () => {
    const textInput: Omit<IBackendComponentInput, "__component"> = {
      id: 14,
      placeholder: "Type your name",
      variant: "text",
      isRequired: true,
      value: null,
      name: "name",
      label: "Name",
      className: "col-span-2",
      type: null,
      multiple: null,
      min: null,
      max: null,
      step: null,
      options: [],
      media: null,
      additionalMedia: null,
      extraMedia: null,
    };
    const form: IBackendForm = {
      ...scopedForm,
      inputs: [textInput],
    };
    const { result } = renderHook(() => {
      return useGetPreparedFormInputs(form);
    }); //?

    expect(result.current).toEqual([
      {
        input: textInput,
        inputName: "inputs[0].value",
        isFile: false,
        options: undefined,
      },
    ]);
  });

  it("shoul return prepared inputs array with listbox input field", async () => {
    const listboxInput: Omit<IBackendComponentInput, "__component"> = {
      id: 21,
      placeholder: "Choose target tier",
      variant: "listbox",
      isRequired: false,
      value: null,
      name: "tier",
      label: "Tier",
      className: "col-span-4",
      type: null,
      multiple: null,
      min: null,
      max: null,
      step: null,
      options: [
        {
          id: 5,
          title: "Lite",
          description: null,
          media: null,
          additionalMedia: null,
        },
        {
          id: 6,
          title: "Pro",
          description: null,
          media: null,
          additionalMedia: null,
        },
      ],
      media: null,
      additionalMedia: null,
      extraMedia: null,
    };
    const form: IBackendForm = {
      ...scopedForm,
      inputs: [listboxInput],
    };
    const { result } = renderHook(() => {
      return useGetPreparedFormInputs(form);
    }); //?

    const sanitizedInputOptions = listboxInput.options?.map((option) => {
      return { ...option, id: undefined };
    });

    expect(result.current).toEqual([
      {
        input: listboxInput,
        inputName: "inputs[0].option",
        isFile: false,
        options: sanitizedInputOptions,
      },
    ]);
  });

  it("shoul return prepared inputs array with multiple listbox input field", async () => {
    const listboxInput: Omit<IBackendComponentInput, "__component"> = {
      id: 21,
      placeholder: "Choose target tier",
      variant: "listbox",
      isRequired: false,
      value: null,
      name: "tier",
      label: "Tier",
      className: "col-span-4",
      type: null,
      multiple: true,
      min: null,
      max: null,
      step: null,
      options: [
        {
          id: 5,
          title: "Lite",
          description: null,
          media: null,
          additionalMedia: null,
        },
        {
          id: 6,
          title: "Pro",
          description: null,
          media: null,
          additionalMedia: null,
        },
      ],
      media: null,
      additionalMedia: null,
      extraMedia: null,
    };
    const form: IBackendForm = {
      ...scopedForm,
      inputs: [listboxInput],
    };
    const { result } = renderHook(() => {
      return useGetPreparedFormInputs(form);
    }); //?

    const sanitizedInputOptions = listboxInput.options?.map((option) => {
      return { ...option, id: undefined };
    });

    expect(result.current).toEqual([
      {
        input: listboxInput,
        inputName: "inputs[0].options",
        isFile: false,
        options: sanitizedInputOptions,
      },
    ]);
  });

  it("shoul return prepared inputs array with date input field", async () => {
    const dateInput: Omit<IBackendComponentInput, "__component"> = {
      id: 19,
      placeholder: "Select release date",
      variant: "date",
      isRequired: false,
      value: null,
      name: "release_date",
      label: "Release date",
      className: "col-span-4",
      type: "date_inline",
      multiple: null,
      min: null,
      max: null,
      step: null,
      options: [],
      media: null,
      additionalMedia: null,
      extraMedia: null,
    };
    const form: IBackendForm = {
      ...scopedForm,
      inputs: [dateInput],
    };
    const { result } = renderHook(() => {
      return useGetPreparedFormInputs(form);
    }); //?

    expect(result.current).toEqual([
      {
        input: dateInput,
        inputName: "inputs[0].dates[0].date_value",
        isFile: false,
        options: undefined,
      },
    ]);
  });

  it("shoul return prepared inputs array with date input field", async () => {
    const dateInput: Omit<IBackendComponentInput, "__component"> = {
      id: 19,
      placeholder: "Select release date",
      variant: "date",
      isRequired: false,
      value: null,
      name: "release_date",
      label: "Release date",
      className: "col-span-4",
      type: "daterange_inline",
      multiple: null,
      min: null,
      max: null,
      step: null,
      options: [],
      media: null,
      additionalMedia: null,
      extraMedia: null,
    };
    const form: IBackendForm = {
      ...scopedForm,
      inputs: [dateInput],
    };
    const { result } = renderHook(() => {
      return useGetPreparedFormInputs(form);
    }); //?

    expect(result.current).toEqual([
      {
        input: dateInput,
        inputName: "inputs[0].dates",
        isFile: false,
        options: undefined,
      },
    ]);
  });

  it("shoul return prepared inputs array with file input field", async () => {
    const fileInput: Omit<IBackendComponentInput, "__component"> = {
      id: 18,
      placeholder: "Upload design file",
      variant: "file",
      isRequired: false,
      value: null,
      name: "design",
      label: "Design",
      className: null,
      type: null,
      multiple: null,
      min: null,
      max: null,
      step: null,
      options: [],
      media: null,
      additionalMedia: null,
      extraMedia: null,
    };
    const form: IBackendForm = {
      ...scopedForm,
      inputs: [fileInput],
    };
    const { result } = renderHook(() => {
      return useGetPreparedFormInputs(form);
    }); //?

    expect(result.current).toEqual([
      {
        input: fileInput,
        inputName: "inputs[0].files",
        isFile: true,
        options: undefined,
      },
    ]);
  });

  it("shoul return prepared inputs array with checkbox input field", async () => {
    const checkboxInput: Omit<IBackendComponentInput, "__component"> = {
      id: 20,
      placeholder: null,
      variant: "switch",
      isRequired: true,
      value: null,
      name: "policy",
      label: "I agree with Terms and Conditions",
      className: "col-span-4",
      type: null,
      multiple: null,
      min: null,
      max: null,
      step: null,
      options: [],
      media: null,
      additionalMedia: null,
      extraMedia: null,
    };
    const form: IBackendForm = {
      ...scopedForm,
      inputs: [checkboxInput],
    };
    const { result } = renderHook(() => {
      return useGetPreparedFormInputs(form);
    }); //?

    expect(result.current).toEqual([
      {
        input: checkboxInput,
        inputName: "inputs[0].is_true",
        isFile: false,
        options: undefined,
      },
    ]);
  });

  it("shoul return prepared inputs array with text input field and initial value", async () => {
    const queryParams = {
      name: "John",
    };
    const query = QueryString.stringify(queryParams);
    const useSearchParams = jest.spyOn(nextNavigation, "useSearchParams");
    useSearchParams.mockImplementation(
      () =>
        ({
          toString: () => {
            return query;
          },
          get: (key: keyof typeof queryParams) => {
            return queryParams[key]; //?
          },
        } as any),
    );

    const textInput: Omit<IBackendComponentInput, "__component"> = {
      id: 14,
      placeholder: "Type your name",
      variant: "text",
      isRequired: true,
      value: null,
      name: "name",
      label: "Name",
      className: "col-span-2",
      type: null,
      multiple: null,
      min: null,
      max: null,
      step: null,
      options: [],
      media: null,
      additionalMedia: null,
      extraMedia: null,
    };
    const form: IBackendForm = {
      ...scopedForm,
      inputs: [textInput],
    };
    const { result } = renderHook(() => {
      return useGetPreparedFormInputs(form);
    }); //?

    expect(result.current).toEqual([
      {
        input: { ...textInput, initialValue: "John" },
        inputName: "inputs[0].value",
        isFile: false,
        options: undefined,
      },
    ]);

    useSearchParams.mockRestore();
  });
});
