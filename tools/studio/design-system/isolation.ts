import path from "node:path";

/** Exact UI-only entry points shared by Studio and production. */
const pureEntries: Record<string, string> = {
  "@sps/shared-frontend-client-utils/chat-scroll":
    "libs/shared/frontend/client/utils/src/lib/chat-scroll/index.ts",
  "@sps/shared-utils/chat-scroll":
    "libs/shared/utils/src/lib/constants/chat-scroll.ts",
};

export function pureStudioUtility(
  root: string,
  specifier: string,
): string | undefined {
  const file = pureEntries[specifier];
  return file ? path.join(root, file) : undefined;
}

export function isPureStudioUtilityFile(root: string, file: string): boolean {
  return Object.values(pureEntries).some(
    (entry) => path.join(root, entry) === file,
  );
}

export function pureStudioUtilities(root: string): string[] {
  return Object.values(pureEntries).map((entry) => path.join(root, entry));
}
