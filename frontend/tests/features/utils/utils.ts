const R = require("ramda");
import { ICustomWorld } from "./custom-world";

export function replaceValue({
  world,
  value,
}: {
  world: ICustomWorld;
  value: string;
}) {
  if (value.includes("__world.")) {
    const slicedValue = value.split("__");
    const toReplaceValue =
      slicedValue.length >= 2 ? value.split("__")[1] : value.split("__")[0];
    const path = toReplaceValue.replace("world.", "").split(".");
    const replacedValue = R.path(path, world);
    const joinedValue =
      slicedValue.length >= 2
        ? `${slicedValue[0]}${replacedValue}`
        : `${replacedValue}${slicedValue[0]}`;

    return joinedValue;
  }

  if (value.includes("__random__")) {
    const randomValue = `tester${Math.floor(Math.random() * 10e5)}`;
    const replacedValue = value.replace("__random__", randomValue);

    return replacedValue;
  }

  return value;
}
