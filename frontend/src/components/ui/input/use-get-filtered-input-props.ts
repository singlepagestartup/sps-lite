import { useMemo } from "react";

const notAllowedProps = [
  "isFile",
  "inputName",
  "initialValue",
  "defaultValue",
  "media",
  "additionalMedia",
  "extraMedia",
  "isRequired",
];

export default function useGetFilteredInputProps(props: any) {
  const filteredHTMLInputProps = useMemo(() => {
    const filtered: any = {};

    for (const key of Object.keys(props)) {
      if (notAllowedProps.includes(key)) {
        continue;
      }

      filtered[key] = props[key];
    }

    return filtered;
  }, [JSON.stringify(props)]);

  return filteredHTMLInputProps;
}
