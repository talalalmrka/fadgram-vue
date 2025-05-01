interface Option {
    value: string | number;
    label: string;
    disabled?: boolean;
}
type __VLS_Props = {
    id?: string;
    icon?: string | null;
    label?: string;
    info?: string;
    error?: string;
    options?: Option[];
    modelValue?: string | number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    radioRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (val: string | number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((val: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
