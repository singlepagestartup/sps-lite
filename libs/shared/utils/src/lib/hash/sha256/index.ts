const PADDING = "00000000";
const hex = (buffer: ArrayBuffer) => {
  let digest = "";

  const view = new DataView(buffer);

  for (let i = 0; i < view.byteLength; i += 4) {
    // We use getUint32 to reduce the number of iterations (notice the `i += 4`)
    const value = view.getUint32(i);
    // toString(16) will transform the integer into the corresponding hex string
    // but will remove any initial "0"
    const stringValue = value.toString(16);

    const paddedValue = (PADDING + stringValue).slice(-PADDING.length);

    digest += paddedValue;
  }

  return digest;
};

export const util = async (str: string) => {
  // Get the string as arraybuffer.
  const buffer = new TextEncoder().encode(str);

  return crypto.subtle.digest("SHA-256", buffer).then((hash) => hex(hash));
};
