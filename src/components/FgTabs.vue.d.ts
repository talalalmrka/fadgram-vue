type Tab = {
    id: string;
    title: string;
    icon?: string;
};
type __VLS_Props = {
    tabs: Tab[];
    modelValue?: number;
};
declare var __VLS_6: string, __VLS_7: {};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_6>]?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: number) => any;
    change: (value: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
