interface Option {
    value: string | number;
    label: string;
    icon?: string;
    disabled?: boolean;
}
type __VLS_Props = {
    id?: string;
    icon?: string;
    label?: string;
    info?: string;
    error?: string;
    options?: Option[];
    modelValue?: string | number | null;
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    clearable?: boolean;
    noResults?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    selectRef: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
}>, {
    id: string;
    modelValue: string | number | null;
    placeholder: string;
    options: Option[];
    searchable: boolean;
    searchPlaceholder: string;
    clearable: boolean;
    noResults: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
