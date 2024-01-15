import { useMemo } from "react";

export function useGetStringProps(props: any) {
  const stringProps = useMemo(() => {
    const renderProps: any = {};

    Object.keys(props).forEach((key) => {
      if (key.includes("data-") && typeof props[key] === "string") {
        renderProps[key] = props[key];
      }
    });

    return renderProps;
  }, [props]);

  return stringProps;
}
