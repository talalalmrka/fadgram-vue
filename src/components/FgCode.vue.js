/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, onMounted, watch, nextTick, watchEffect, computed } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-liquid';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-scss';
import FgIcon from './FgIcon.vue';
const props = withDefaults(defineProps(), {
    language: 'html'
});
const prismRef = ref(null);
const isCopied = ref(false);
const getRawCode = () => {
    return prismRef.value?.querySelector('code')?.textContent || '';
};
const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(getRawCode());
        isCopied.value = true;
        setTimeout(() => isCopied.value = false, 2000);
    }
    catch (err) {
        console.error('Failed to copy:', err);
    }
};
watch(() => getRawCode(), () => {
    nextTick(() => {
        Prism.highlightAll();
    });
});
watchEffect(() => Prism.highlightAll());
onMounted(() => {
    Prism.highlightAll();
});
const getLanguage = computed(() => props.language === 'vue' ? 'html' : props.language);
const getLanguageLabel = computed(() => props.language);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    language: 'html'
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-container" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "code-toolbar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "code-file-name" },
});
(__VLS_ctx.getLanguageLabel);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.copyCode) },
    ...{ class: "hover:text-white" },
});
/** @type {[typeof FgIcon, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(FgIcon, new FgIcon({
    icon: (__VLS_ctx.isCopied ? 'bi-clipboard-check-fill' : 'bi-clipboard'),
}));
const __VLS_1 = __VLS_0({
    icon: (__VLS_ctx.isCopied ? 'bi-clipboard-check-fill' : 'bi-clipboard'),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({
    ref: "prismRef",
});
/** @type {typeof __VLS_ctx.prismRef} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.code, __VLS_intrinsicElements.code)({
    ...{ class: ('language-' + __VLS_ctx.getLanguage) },
    'data-prismjs-copy': "Copy the C snippet!",
});
var __VLS_3 = {};
/** @type {__VLS_StyleScopedClasses['code-container']} */ ;
/** @type {__VLS_StyleScopedClasses['code-toolbar']} */ ;
/** @type {__VLS_StyleScopedClasses['code-file-name']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-white']} */ ;
// @ts-ignore
var __VLS_4 = __VLS_3;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FgIcon: FgIcon,
            prismRef: prismRef,
            isCopied: isCopied,
            copyCode: copyCode,
            getLanguage: getLanguage,
            getLanguageLabel: getLanguageLabel,
        };
    },
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
