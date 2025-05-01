import type { PropType } from 'vue';
type AlertType = 'info' | 'success' | 'error' | 'warning' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'base' | 'light' | 'dark' | 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan' | 'gray' | 'slate' | 'zinc' | 'stone' | 'amber' | 'lime' | 'emerald' | 'sky' | 'violet' | 'fuchsia' | 'rose';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    class: {
        type: StringConstructor;
        default: null;
    };
    atts: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    type: {
        type: PropType<AlertType>;
        default: string;
    };
    soft: {
        type: BooleanConstructor;
        default: boolean;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    info: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    iconClass: {
        type: StringConstructor;
        default: null;
    };
    content: {
        type: StringConstructor;
        default: null;
    };
    hideIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: StringConstructor;
        default: null;
    };
    atts: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    type: {
        type: PropType<AlertType>;
        default: string;
    };
    soft: {
        type: BooleanConstructor;
        default: boolean;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    info: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    iconClass: {
        type: StringConstructor;
        default: null;
    };
    content: {
        type: StringConstructor;
        default: null;
    };
    hideIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    size: string;
    class: string;
    type: AlertType;
    icon: string;
    info: boolean;
    success: boolean;
    error: boolean;
    warning: boolean;
    atts: Record<string, any>;
    soft: boolean;
    outline: boolean;
    iconClass: string;
    content: string;
    hideIcon: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
