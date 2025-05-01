type __VLS_Props = {
    id?: string;
    icon?: string;
    label?: string;
    info?: string;
    error?: string;
    modelValue?: string;
    placeholder?: string;
    rows?: string | number;
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    textareaRef: import("vue").Ref<HTMLTextAreaElement | null, HTMLTextAreaElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (val: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
