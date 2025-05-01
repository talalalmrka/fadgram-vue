type __VLS_Props = {
    id?: string;
    icon?: string | null;
    label?: string;
    info?: string;
    error?: string;
    value?: any;
    uncheckedValue?: any;
    modelValue?: any;
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    toggleRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (val: any) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
