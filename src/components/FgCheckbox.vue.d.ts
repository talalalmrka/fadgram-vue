type __VLS_Props = {
    id?: string;
    icon?: string;
    label?: string;
    info?: string;
    error?: string;
    modelValue?: any;
    value?: any;
    uncheckedValue?: any;
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    checkboxRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (val: any) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
