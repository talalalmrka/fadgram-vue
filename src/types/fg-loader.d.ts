export declare const LOADER_TYPES: readonly ["default", "dotsBounce", "dotsFade", "dotsMove", "dotsRotate", "dotsScale"];
export type LoaderType = (typeof LOADER_TYPES)[number];
export declare const LOADER_SIZES: readonly ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];
export type LoaderSize = (typeof LOADER_SIZES)[number];
/**
 * Type guard for LoaderType
 */
export declare function isLoaderType(value: string): value is LoaderType;
/**
 * Type guard for LoaderSize
 */
export declare function isLoaderSize(value: string): value is LoaderSize;
/**
 * Convert a LoaderType value to its corresponding kebab-case attribute name.
 * Returns empty string for "default".
 */
export declare function getAttrFromType(type: LoaderType): string;
/**
 * Convert a LoaderSize value to its corresponding attribute name (same as value).
 */
export declare function getAttrFromSize(size: LoaderSize): string;
