/**
 *
 * replacer("example@example.com", [2,2], "#") => ex###############om
 *
 * @param toReplace string
 * @param symbols how many items left in the string
 * @param replaceBy replace symbol
 * @returns string
 */
export function replacer(toReplace: string, symbols = [3, 3], replaceBy = "*") {
  if (!toReplace?.length) {
    return "";
  }

  const firstPart = toReplace.slice(0, symbols[0]);
  const secondPart = replaceBy.repeat(
    toReplace.length - (symbols[0] + symbols[1]),
  );
  const thirdPart = toReplace.slice(-symbols[1]);

  return `${firstPart}${secondPart}${thirdPart}`;
}
