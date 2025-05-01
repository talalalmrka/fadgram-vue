/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
import { useAttrs } from 'vue';
import { LOADER_TYPES, LOADER_SIZES, isLoaderType, isLoaderSize, getAttrFromType, getAttrFromSize, } from '../types';
defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps(), {
    type: 'default',
    size: null,
});
const attrs = useAttrs();
// Build attribute maps
const typeAttrMap = LOADER_TYPES.reduce((map, t) => {
    const kebab = getAttrFromType(t);
    if (kebab)
        map[kebab] = t;
    return map;
}, {});
const sizeAttrMap = LOADER_SIZES.reduce((map, s) => {
    const kebab = getAttrFromSize(s);
    map[kebab] = s;
    return map;
}, {});
// Determine loader type via boolean attr or prop
const loaderType = computed(() => {
    for (const [kebab, typeVal] of Object.entries(typeAttrMap)) {
        if (attrs[kebab] !== undefined) {
            return typeVal;
        }
    }
    return isLoaderType(props.type) ? props.type : 'default';
});
// Determine loader size via boolean attr or prop
const loaderSize = computed(() => {
    for (const [kebab, sizeVal] of Object.entries(sizeAttrMap)) {
        if (attrs[kebab] !== undefined) {
            return sizeVal;
        }
    }
    return isLoaderSize(props.size) ? props.size : null;
});
// Static class mappings
const loaderClasses = {
    default: 'fg-loader',
    dotsBounce: 'fg-loader-dots-bounce',
    dotsFade: 'fg-loader-dots-fade',
    dotsMove: 'fg-loader-dots-move',
    dotsRotate: 'fg-loader-dots-rotate',
    dotsScale: 'fg-loader-dots-scale',
};
const sizeClasses = {
    xxs: 'size-2',
    xs: 'size-3',
    sm: 'size-4',
    md: 'size-6',
    lg: 'size-8',
    xl: 'size-10',
    xxl: 'size-14',
};
const classes = computed(() => {
    const cls = ['icon', loaderClasses[loaderType.value]];
    if (loaderSize.value && sizeClasses[loaderSize.value]) {
        cls.push(sizeClasses[loaderSize.value]);
    }
    return cls;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'default',
    size: null,
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ class: (__VLS_ctx.classes) },
});
[__VLS_dollars.$attrs,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            classes: classes,
        };
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
