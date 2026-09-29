import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { Fold, Expand, House, Document, EditPen, ChatDotRound, Link, View, Bell, ArrowDown } from '@element-plus/icons-vue';
const app = useAppStore();
const route = useRoute();
const mobileOpen = ref(false);
const title = computed(() => String(route.meta.title || '管理平台'));
const menu = [
    { to: '/admin/dashboard', label: '数据概览', icon: House },
    { to: '/admin/articles', label: '文章管理', icon: Document },
    { to: '/admin/editor', label: '写文章', icon: EditPen },
    { to: '/admin/comments', label: '评论管理', icon: ChatDotRound, badge: 4 },
    { to: '/admin/links', label: '友链管理', icon: Link },
    { to: '/admin/preview', label: '全站预览', icon: View },
];
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "admin-shell" },
});
/** @type {__VLS_StyleScopedClasses['admin-shell']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
    ...{ class: "admin-sidebar" },
    ...{ class: ({ collapsed: __VLS_ctx.app.adminCollapsed, open: __VLS_ctx.mobileOpen }) },
});
/** @type {__VLS_StyleScopedClasses['admin-sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['collapsed']} */ ;
/** @type {__VLS_StyleScopedClasses['open']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "admin-brand" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "admin-brand" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['admin-brand']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
if (!__VLS_ctx.app.adminCollapsed) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
}
// @ts-ignore
[app, app, mobileOpen,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "admin-menu" },
});
/** @type {__VLS_StyleScopedClasses['admin-menu']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.menu))) {
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ 'onClick': {} },
        key: (item.to),
        to: (item.to),
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClick': {} },
        key: (item.to),
        to: (item.to),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_11;
    const __VLS_12 = {
        /** @type {typeof __VLS_11.click} */
        onClick: (...[$event]) => {
            return (__VLS_ctx.mobileOpen = false);
            // @ts-ignore
            [mobileOpen, menu,];
        },
    };
    const { default: __VLS_13 } = __VLS_9.slots;
    const __VLS_14 = (item.icon);
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    if (!__VLS_ctx.app.adminCollapsed) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (item.label);
    }
    if (item.badge && !__VLS_ctx.app.adminCollapsed) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.em, __VLS_intrinsics.em)({});
        (item.badge);
    }
    // @ts-ignore
    [app, app,];
    var __VLS_9;
    var __VLS_10;
    // @ts-ignore
    [];
}
if (!__VLS_ctx.app.adminCollapsed) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "sidebar-status" },
    });
    /** @type {__VLS_StyleScopedClasses['sidebar-status']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
}
if (__VLS_ctx.mobileOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.mobileOpen))
                    throw 0;
                return (__VLS_ctx.mobileOpen = false);
                // @ts-ignore
                [app, mobileOpen, mobileOpen,];
            } },
        ...{ class: "sidebar-mask" },
    });
    /** @type {__VLS_StyleScopedClasses['sidebar-mask']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "admin-main" },
    ...{ class: ({ expanded: __VLS_ctx.app.adminCollapsed }) },
});
/** @type {__VLS_StyleScopedClasses['admin-main']} */ ;
/** @type {__VLS_StyleScopedClasses['expanded']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "admin-topbar" },
});
/** @type {__VLS_StyleScopedClasses['admin-topbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.app.toggleAdmin());
            // @ts-ignore
            [app, app,];
        } },
    ...{ class: "icon-button desktop-collapse" },
});
/** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop-collapse']} */ ;
if (__VLS_ctx.app.adminCollapsed) {
    let __VLS_19;
    /** @ts-ignore @type { | typeof __VLS_components.Expand} */
    Expand;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
}
else {
    let __VLS_24;
    /** @ts-ignore @type { | typeof __VLS_components.Fold} */
    Fold;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.mobileOpen = true);
            // @ts-ignore
            [app, mobileOpen,];
        } },
    ...{ class: "icon-button admin-mobile-menu" },
});
/** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
/** @type {__VLS_StyleScopedClasses['admin-mobile-menu']} */ ;
let __VLS_29;
/** @ts-ignore @type { | typeof __VLS_components.Expand} */
Expand;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({}));
const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "admin-title" },
});
/** @type {__VLS_StyleScopedClasses['admin-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
(__VLS_ctx.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "admin-user" },
});
/** @type {__VLS_StyleScopedClasses['admin-user']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "icon-button notice-button" },
});
/** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
/** @type {__VLS_StyleScopedClasses['notice-button']} */ ;
let __VLS_34;
/** @ts-ignore @type { | typeof __VLS_components.Bell} */
Bell;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent1(__VLS_34, new __VLS_34({}));
const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
__VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "avatar" },
});
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
let __VLS_39;
/** @ts-ignore @type { | typeof __VLS_components.ArrowDown} */
ArrowDown;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent1(__VLS_39, new __VLS_39({
    ...{ class: "down" },
}));
const __VLS_41 = __VLS_40({
    ...{ class: "down" },
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
/** @type {__VLS_StyleScopedClasses['down']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "admin-content" },
});
/** @type {__VLS_StyleScopedClasses['admin-content']} */ ;
let __VLS_44;
/** @ts-ignore @type { | typeof __VLS_components.RouterView} */
RouterView;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({}));
const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
// @ts-ignore
[title,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
