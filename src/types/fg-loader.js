// src/types/fg-loader.ts
export const LOADER_TYPES = [
    "default",
    "dotsBounce",
    "dotsFade",
    "dotsMove",
    "dotsRotate",
    "dotsScale",
];
export const LOADER_SIZES = [
    "xxs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
];
/**
 * Type guard for LoaderType
 */
export function isLoaderType(value) {
    return LOADER_TYPES.includes(value);
}
/**
 * Type guard for LoaderSize
 */
export function isLoaderSize(value) {
    return LOADER_SIZES.includes(value);
}
/**
 * Convert a LoaderType value to its corresponding kebab-case attribute name.
 * Returns empty string for "default".
 */
export function getAttrFromType(type) {
    if (type === "default")
        return "";
    return type.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
/**
 * Convert a LoaderSize value to its corresponding attribute name (same as value).
 */
export function getAttrFromSize(size) {
    return size;
}
