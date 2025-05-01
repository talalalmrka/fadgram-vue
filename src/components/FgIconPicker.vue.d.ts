interface Props {
    id?: string;
    name?: string;
    modelValue?: string | null;
    icon?: string;
    label?: string | null;
    placeholder?: string;
    autofocus?: boolean;
    autocomplete?: string;
    required?: boolean;
    disabled?: boolean;
    inputClass?: string | null;
    atts?: Record<string, unknown>;
    info?: string;
    containerClass?: string | null;
    containerAtts?: Record<string, unknown>;
    groupClass?: string | null;
    groupAtts?: Record<string, unknown>;
    dropdownClass?: string | null;
    dropdownAtts?: Record<string, unknown>;
    size?: string | null;
    icons?: string[];
    perPage?: number;
    noIconsFound?: string;
    searchPlaceholder?: string;
    error?: string;
}
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
