import { useMemo } from "react";
import { Props as InputProps } from "./index";

const notAllowedProps = [
  "isFile",
  "inputName",
  "initialValue",
  "defaultValue",
  "media",
  "additionalMedia",
  "extraMedia",
  "isRequired",
  "isServer",
] as const;

type ReturnType<T> = Omit<T, (typeof notAllowedProps)[number]>;

export default function useGetFilteredInputProps<T extends InputProps>(
  props: T,
): ReturnType<T> {
  const filteredHTMLInputProps = useMemo(() => {
    const filtered: ReturnType<T> = {} as ReturnType<T>;

    for (const key of Object.keys(props)) {
      if (notAllowedProps.includes(key as (typeof notAllowedProps)[number])) {
        continue;
      }

      filtered[key as keyof ReturnType<T>] = props[key as keyof ReturnType<T>];
    }

    return filtered;
  }, [JSON.stringify(props)]);

  return filteredHTMLInputProps;
}
