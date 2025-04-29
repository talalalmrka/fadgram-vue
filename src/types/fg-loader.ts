// src/types/fg-loader.ts
export const LOADER_TYPES = [
  "default",
  "dotsBounce",
  "dotsFade",
  "dotsMove",
  "dotsRotate",
  "dotsScale",
] as const;
export type LoaderType = (typeof LOADER_TYPES)[number];

export const LOADER_SIZES = [
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
] as const;
export type LoaderSize = (typeof LOADER_SIZES)[number];

/**
 * Type guard for LoaderType
 */
export function isLoaderType(value: string): value is LoaderType {
  return LOADER_TYPES.includes(value as LoaderType);
}

/**
 * Type guard for LoaderSize
 */
export function isLoaderSize(value: string): value is LoaderSize {
  return LOADER_SIZES.includes(value as LoaderSize);
}

/**
 * Convert a LoaderType value to its corresponding kebab-case attribute name.
 * Returns empty string for "default".
 */
export function getAttrFromType(type: LoaderType): string {
  if (type === "default") return "";
  return type.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Convert a LoaderSize value to its corresponding attribute name (same as value).
 */
export function getAttrFromSize(size: LoaderSize): string {
  return size;
}
