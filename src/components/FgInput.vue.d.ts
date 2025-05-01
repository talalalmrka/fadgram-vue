type __VLS_Props = {
    id?: string;
    icon?: string;
    label?: string;
    info?: string;
    error?: string;
    size?: string;
    modelValue?: string | number;
    placeholder?: string;
    disabled?: boolean;
    type?: string;
    startIcon?: string;
    endIcon?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    inputRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (val: string | number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((val: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
