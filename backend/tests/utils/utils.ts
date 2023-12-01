const R = require("ramda");
import { World } from "./elements/World";

export function pathReplacer({ parent, path }: { parent: any; path: string }) {
  const replacedPath = path.replace(/\[/g, ".").replace(/\]/g, "");
  const result = R.path(replacedPath.split("."), parent);

  return result;
}

export function replaceValue({
  world,
  value,
}: {
  world: World;
  value: string;
}) {
  if (value.includes("__world.")) {
    const slicedValue = value.split("__"); //?
    const indexOftoReplaceValue = slicedValue.findIndex((item) =>
      item.includes("world."),
    ); //?
    const toReplaceValue =
      slicedValue.length >= 2 ? value.split("__")[1] : value.split("__")[0];
    const path = toReplaceValue
      .replace("world.", "")
      .split(".")
      .map((p) => {
        if (p.includes("[")) {
          const [key, index] = p.split("["); //?

          return [key, parseInt(index.replace("]", ""))];
        }

        return p;
      })
      .flat(1); //?
    const replacedValue = R.path(path, world); //?

    const joinedValue = `${slicedValue
      .map((value, index) => {
        if (index === indexOftoReplaceValue) {
          return replacedValue;
        }

        return value;
      })
      .join("")}`; //?

    return joinedValue;
  }

  if (value.includes("__random__")) {
    const randomValue = `tester${Math.floor(Math.random() * 10e5)}`;
    const replacedValue = value.replace("__random__", randomValue);

    return replacedValue;
  }

  return value;
}
