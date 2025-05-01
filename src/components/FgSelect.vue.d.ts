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
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    selectRef: import("vue").Ref<HTMLSelectElement | null, HTMLSelectElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (val: string | number | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((val: string | number | null) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
