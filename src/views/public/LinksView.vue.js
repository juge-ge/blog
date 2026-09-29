import { links } from '@/data/mock';
import { TopRight } from '@element-plus/icons-vue';
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container page-wrap" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['page-wrap']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-intro" },
});
/** @type {__VLS_StyleScopedClasses['page-intro']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "section-kicker" },
});
/** @type {__VLS_StyleScopedClasses['section-kicker']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "friends-grid" },
});
/** @type {__VLS_StyleScopedClasses['friends-grid']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.links))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
        key: (item.name),
        href: (item.url),
        target: "_blank",
        rel: "noopener noreferrer",
        ...{ class: "friend-card" },
    });
    /** @type {__VLS_StyleScopedClasses['friend-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "friend-avatar" },
        ...{ style: ({ background: item.color }) },
    });
    /** @type {__VLS_StyleScopedClasses['friend-avatar']} */ ;
    (item.initials);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    (item.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (item.desc);
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.TopRight} */
    TopRight;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [links,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "link-note" },
});
/** @type {__VLS_StyleScopedClasses['link-note']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
