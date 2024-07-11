import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @deprecated Use import from `@sps/shared-frontend-client-utils` instead.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
