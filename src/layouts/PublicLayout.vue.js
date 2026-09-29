import { ref } from 'vue';
import { useAppStore } from '@/stores/app';
import { Search, Menu, Moon, Sunny, Close } from '@element-plus/icons-vue';
const app = useAppStore();
const mobileOpen = ref(false);
const keyword = ref('');
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "public-shell" },
});
/** @type {__VLS_StyleScopedClasses['public-shell']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "site-header" },
});
/** @type {__VLS_StyleScopedClasses['site-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container header-inner" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['header-inner']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    to: "/",
    ...{ class: "brand" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    to: "/",
    ...{ class: "brand" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.click} */
    onClick: (...[$event]) => {
        return (__VLS_ctx.mobileOpen = false);
        // @ts-ignore
        [mobileOpen,];
    },
};
/** @type {__VLS_StyleScopedClasses['brand']} */ ;
const { default: __VLS_7 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "brand-mark" },
});
/** @type {__VLS_StyleScopedClasses['brand-mark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "brand-copy" },
});
/** @type {__VLS_StyleScopedClasses['brand-copy']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "desktop-nav" },
    'aria-label': "主导航",
});
/** @type {__VLS_StyleScopedClasses['desktop-nav']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    to: "/",
}));
const __VLS_10 = __VLS_9({
    to: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_11.slots;
// @ts-ignore
[];
var __VLS_11;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    to: "/archive",
}));
const __VLS_16 = __VLS_15({
    to: "/archive",
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const { default: __VLS_19 } = __VLS_17.slots;
// @ts-ignore
[];
var __VLS_17;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    to: "/links",
}));
const __VLS_22 = __VLS_21({
    to: "/links",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_25 } = __VLS_23.slots;
// @ts-ignore
[];
var __VLS_23;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    to: "/about",
}));
const __VLS_28 = __VLS_27({
    to: "/about",
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
const { default: __VLS_31 } = __VLS_29.slots;
// @ts-ignore
[];
var __VLS_29;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-actions" },
});
/** @type {__VLS_StyleScopedClasses['header-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.app.searchOpen = true);
            // @ts-ignore
            [app,];
        } },
    ...{ class: "icon-button" },
    'aria-label': "搜索",
});
/** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
let __VLS_32;
/** @ts-ignore @type { | typeof __VLS_components.Search} */
Search;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.app.toggleTheme());
            // @ts-ignore
            [app,];
        } },
    ...{ class: "icon-button" },
    'aria-label': "切换主题",
});
/** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
if (__VLS_ctx.app.dark) {
    let __VLS_37;
    /** @ts-ignore @type { | typeof __VLS_components.Sunny} */
    Sunny;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
}
else {
    let __VLS_42;
    /** @ts-ignore @type { | typeof __VLS_components.Moon} */
    Moon;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
}
let __VLS_47;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    ...{ class: "admin-link" },
    to: "/admin/dashboard",
}));
const __VLS_49 = __VLS_48({
    ...{ class: "admin-link" },
    to: "/admin/dashboard",
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
/** @type {__VLS_StyleScopedClasses['admin-link']} */ ;
const { default: __VLS_52 } = __VLS_50.slots;
// @ts-ignore
[app,];
var __VLS_50;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            return (__VLS_ctx.mobileOpen = !__VLS_ctx.mobileOpen);
            // @ts-ignore
            [mobileOpen, mobileOpen,];
        } },
    ...{ class: "icon-button mobile-menu" },
    'aria-label': "打开菜单",
});
/** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-menu']} */ ;
let __VLS_53;
/** @ts-ignore @type { | typeof __VLS_components.Menu} */
Menu;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent1(__VLS_53, new __VLS_53({}));
const __VLS_55 = __VLS_54({}, ...__VLS_functionalComponentArgsRest(__VLS_54));
if (__VLS_ctx.mobileOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
        ...{ class: "mobile-nav" },
    });
    /** @type {__VLS_StyleScopedClasses['mobile-nav']} */ ;
    let __VLS_58;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
        ...{ 'onClick': {} },
        to: "/",
    }));
    const __VLS_60 = __VLS_59({
        ...{ 'onClick': {} },
        to: "/",
    }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    let __VLS_63;
    const __VLS_64 = {
        /** @type {typeof __VLS_63.click} */
        onClick: (...[$event]) => {
            if (!(__VLS_ctx.mobileOpen))
                throw 0;
            return (__VLS_ctx.mobileOpen = false);
            // @ts-ignore
            [mobileOpen, mobileOpen,];
        },
    };
    const { default: __VLS_65 } = __VLS_61.slots;
    // @ts-ignore
    [];
    var __VLS_61;
    var __VLS_62;
    let __VLS_66;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
        ...{ 'onClick': {} },
        to: "/archive",
    }));
    const __VLS_68 = __VLS_67({
        ...{ 'onClick': {} },
        to: "/archive",
    }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    let __VLS_71;
    const __VLS_72 = {
        /** @type {typeof __VLS_71.click} */
        onClick: (...[$event]) => {
            if (!(__VLS_ctx.mobileOpen))
                throw 0;
            return (__VLS_ctx.mobileOpen = false);
            // @ts-ignore
            [mobileOpen,];
        },
    };
    const { default: __VLS_73 } = __VLS_69.slots;
    // @ts-ignore
    [];
    var __VLS_69;
    var __VLS_70;
    let __VLS_74;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
        ...{ 'onClick': {} },
        to: "/links",
    }));
    const __VLS_76 = __VLS_75({
        ...{ 'onClick': {} },
        to: "/links",
    }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    let __VLS_79;
    const __VLS_80 = {
        /** @type {typeof __VLS_79.click} */
        onClick: (...[$event]) => {
            if (!(__VLS_ctx.mobileOpen))
                throw 0;
            return (__VLS_ctx.mobileOpen = false);
            // @ts-ignore
            [mobileOpen,];
        },
    };
    const { default: __VLS_81 } = __VLS_77.slots;
    // @ts-ignore
    [];
    var __VLS_77;
    var __VLS_78;
    let __VLS_82;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent1(__VLS_82, new __VLS_82({
        ...{ 'onClick': {} },
        to: "/about",
    }));
    const __VLS_84 = __VLS_83({
        ...{ 'onClick': {} },
        to: "/about",
    }, ...__VLS_functionalComponentArgsRest(__VLS_83));
    let __VLS_87;
    const __VLS_88 = {
        /** @type {typeof __VLS_87.click} */
        onClick: (...[$event]) => {
            if (!(__VLS_ctx.mobileOpen))
                throw 0;
            return (__VLS_ctx.mobileOpen = false);
            // @ts-ignore
            [mobileOpen,];
        },
    };
    const { default: __VLS_89 } = __VLS_85.slots;
    // @ts-ignore
    [];
    var __VLS_85;
    var __VLS_86;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({});
let __VLS_90;
/** @ts-ignore @type { | typeof __VLS_components.RouterView} */
RouterView;
// @ts-ignore
const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({}));
const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
__VLS_asFunctionalElement1(__VLS_intrinsics.footer, __VLS_intrinsics.footer)({
    ...{ class: "site-footer" },
});
/** @type {__VLS_StyleScopedClasses['site-footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container footer-inner" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-inner']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "footer-links" },
});
/** @type {__VLS_StyleScopedClasses['footer-links']} */ ;
let __VLS_95;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent1(__VLS_95, new __VLS_95({
    to: "/archive",
}));
const __VLS_97 = __VLS_96({
    to: "/archive",
}, ...__VLS_functionalComponentArgsRest(__VLS_96));
const { default: __VLS_100 } = __VLS_98.slots;
// @ts-ignore
[];
var __VLS_98;
let __VLS_101;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_102 = __VLS_asFunctionalComponent1(__VLS_101, new __VLS_101({
    to: "/links",
}));
const __VLS_103 = __VLS_102({
    to: "/links",
}, ...__VLS_functionalComponentArgsRest(__VLS_102));
const { default: __VLS_106 } = __VLS_104.slots;
// @ts-ignore
[];
var __VLS_104;
let __VLS_107;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_108 = __VLS_asFunctionalComponent1(__VLS_107, new __VLS_107({
    to: "/about",
}));
const __VLS_109 = __VLS_108({
    to: "/about",
}, ...__VLS_functionalComponentArgsRest(__VLS_108));
const { default: __VLS_112 } = __VLS_110.slots;
// @ts-ignore
[];
var __VLS_110;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
if (__VLS_ctx.app.searchOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.app.searchOpen))
                    throw 0;
                return (__VLS_ctx.app.searchOpen = false);
                // @ts-ignore
                [app, app,];
            } },
        ...{ class: "search-overlay" },
    });
    /** @type {__VLS_StyleScopedClasses['search-overlay']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "search-panel" },
    });
    /** @type {__VLS_StyleScopedClasses['search-panel']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "search-title" },
    });
    /** @type {__VLS_StyleScopedClasses['search-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.app.searchOpen))
                    throw 0;
                return (__VLS_ctx.app.searchOpen = false);
                // @ts-ignore
                [app,];
            } },
        ...{ class: "icon-button" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
    let __VLS_113;
    /** @ts-ignore @type { | typeof __VLS_components.Close} */
    Close;
    // @ts-ignore
    const __VLS_114 = __VLS_asFunctionalComponent1(__VLS_113, new __VLS_113({}));
    const __VLS_115 = __VLS_114({}, ...__VLS_functionalComponentArgsRest(__VLS_114));
    let __VLS_118;
    /** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
    elInput;
    // @ts-ignore
    const __VLS_119 = __VLS_asFunctionalComponent1(__VLS_118, new __VLS_118({
        modelValue: (__VLS_ctx.keyword),
        size: "large",
        placeholder: "输入标题、标签或关键词",
        prefixIcon: (__VLS_ctx.Search),
        autofocus: true,
    }));
    const __VLS_120 = __VLS_119({
        modelValue: (__VLS_ctx.keyword),
        size: "large",
        placeholder: "输入标题、标签或关键词",
        prefixIcon: (__VLS_ctx.Search),
        autofocus: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_119));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "search-hint" },
    });
    /** @type {__VLS_StyleScopedClasses['search-hint']} */ ;
    if (__VLS_ctx.keyword) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "search-result" },
        });
        /** @type {__VLS_StyleScopedClasses['search-result']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "search-dot" },
        });
        /** @type {__VLS_StyleScopedClasses['search-dot']} */ ;
        (__VLS_ctx.keyword);
    }
}
// @ts-ignore
[keyword, keyword, keyword, Search,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
