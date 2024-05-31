import path from "path";
import fs from "fs/promises";

export async function getUniqueFileName({
  extension,
}: {
  extension: string;
}): Promise<string> {
  const fileName = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);

  const root = process.cwd();
  const filePath = path.join(root, "public", fileName + "." + extension);

  try {
    await fs.access(filePath);
    return await getUniqueFileName({ extension });
  } catch {
    return fileName;
  }
}
