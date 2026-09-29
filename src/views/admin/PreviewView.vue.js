import { ref } from 'vue';
import { Monitor, Iphone, Refresh, TopRight } from '@element-plus/icons-vue';
const device = ref('desktop');
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "preview-view" },
});
/** @type {__VLS_StyleScopedClasses['preview-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "preview-toolbar" },
});
/** @type {__VLS_StyleScopedClasses['preview-toolbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "device-switch" },
});
/** @type {__VLS_StyleScopedClasses['device-switch']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.device = 'desktop');
            // @ts-ignore
            [device,];
        } },
    ...{ class: ({ active: __VLS_ctx.device === 'desktop' }) },
});
/** @type {__VLS_StyleScopedClasses['active']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Monitor} */
Monitor;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.device = 'mobile');
            // @ts-ignore
            [device, device,];
        } },
    ...{ class: ({ active: __VLS_ctx.device === 'mobile' }) },
});
/** @type {__VLS_StyleScopedClasses['active']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.Iphone} */
Iphone;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    icon: (__VLS_ctx.Refresh),
}));
const __VLS_12 = __VLS_11({
    icon: (__VLS_ctx.Refresh),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_15 } = __VLS_13.slots;
// @ts-ignore
[device, Refresh,];
var __VLS_13;
let __VLS_16;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    to: "/",
}));
const __VLS_18 = __VLS_17({
    to: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_21 } = __VLS_19.slots;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    type: "primary",
    icon: (__VLS_ctx.TopRight),
}));
const __VLS_24 = __VLS_23({
    type: "primary",
    icon: (__VLS_ctx.TopRight),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
const { default: __VLS_27 } = __VLS_25.slots;
// @ts-ignore
[TopRight,];
var __VLS_25;
// @ts-ignore
[];
var __VLS_19;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "device-stage" },
});
/** @type {__VLS_StyleScopedClasses['device-stage']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "browser-frame" },
    ...{ class: (__VLS_ctx.device) },
});
/** @type {__VLS_StyleScopedClasses['browser-frame']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "browser-bar" },
});
/** @type {__VLS_StyleScopedClasses['browser-bar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.iframe, __VLS_intrinsics.iframe)({
    src: "/",
    title: "博客公开页面预览",
});
// @ts-ignore
[device,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
