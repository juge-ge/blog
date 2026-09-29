import { computed, ref } from 'vue';
import { articles } from '@/data/mock';
import { Search, Timer, View, Calendar, CollectionTag } from '@element-plus/icons-vue';
const keyword = ref('');
const activeCategory = ref('全部');
const categories = ['全部', 'AI 实战', '实验记录', '年度总结'];
const visibleArticles = computed(() => articles.filter((article) => {
    const categoryMatch = activeCategory.value === '全部' || article.category === activeCategory.value;
    const keywordMatch = !keyword.value || `${article.title}${article.summary}${article.tags.join('')}`.toLowerCase().includes(keyword.value.toLowerCase());
    return categoryMatch && keywordMatch;
}));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "home-feed container" },
});
/** @type {__VLS_StyleScopedClasses['home-feed']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "feed-header" },
});
/** @type {__VLS_StyleScopedClasses['feed-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.keyword),
    prefixIcon: (__VLS_ctx.Search),
    placeholder: "搜索文章",
    clearable: true,
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.keyword),
    prefixIcon: (__VLS_ctx.Search),
    placeholder: "搜索文章",
    clearable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "category-tabs compact-tabs" },
    role: "tablist",
    'aria-label': "文章分类",
});
/** @type {__VLS_StyleScopedClasses['category-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['compact-tabs']} */ ;
for (const [category] of __VLS_vFor((__VLS_ctx.categories))) {
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
    elButton;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        ...{ 'onClick': {} },
        key: (category),
        type: (__VLS_ctx.activeCategory === category ? 'primary' : 'default'),
        round: true,
    }));
    const __VLS_7 = __VLS_6({
        ...{ 'onClick': {} },
        key: (category),
        type: (__VLS_ctx.activeCategory === category ? 'primary' : 'default'),
        round: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    let __VLS_10;
    const __VLS_11 = {
        /** @type {typeof __VLS_10.click} */
        onClick: (...[$event]) => {
            return (__VLS_ctx.activeCategory = category);
            // @ts-ignore
            [keyword, Search, categories, activeCategory, activeCategory,];
        },
    };
    const { default: __VLS_12 } = __VLS_8.slots;
    (category);
    // @ts-ignore
    [];
    var __VLS_8;
    var __VLS_9;
    // @ts-ignore
    [];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "feed-layout" },
});
/** @type {__VLS_StyleScopedClasses['feed-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "post-feed" },
});
/** @type {__VLS_StyleScopedClasses['post-feed']} */ ;
for (const [article] of __VLS_vFor((__VLS_ctx.visibleArticles))) {
    let __VLS_13;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        key: (article.id),
        to: (`/article/${article.slug}`),
        ...{ class: "feed-post" },
    }));
    const __VLS_15 = __VLS_14({
        key: (article.id),
        to: (`/article/${article.slug}`),
        ...{ class: "feed-post" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    /** @type {__VLS_StyleScopedClasses['feed-post']} */ ;
    const { default: __VLS_18 } = __VLS_16.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "feed-post-copy" },
    });
    /** @type {__VLS_StyleScopedClasses['feed-post-copy']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "feed-post-meta" },
    });
    /** @type {__VLS_StyleScopedClasses['feed-post-meta']} */ ;
    let __VLS_19;
    /** @ts-ignore @type { | typeof __VLS_components.elTag | typeof __VLS_components.ElTag | typeof __VLS_components['el-tag'] | typeof __VLS_components.elTag | typeof __VLS_components.ElTag | typeof __VLS_components['el-tag']} */
    elTag;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
        size: "small",
        effect: "plain",
    }));
    const __VLS_21 = __VLS_20({
        size: "small",
        effect: "plain",
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const { default: __VLS_24 } = __VLS_22.slots;
    (article.category);
    // @ts-ignore
    [visibleArticles,];
    var __VLS_22;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_25;
    /** @ts-ignore @type { | typeof __VLS_components.Calendar} */
    Calendar;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    (article.date);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    (article.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (article.summary);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "feed-post-bottom" },
    });
    /** @type {__VLS_StyleScopedClasses['feed-post-bottom']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "tag-row" },
    });
    /** @type {__VLS_StyleScopedClasses['tag-row']} */ ;
    for (const [tag] of __VLS_vFor((article.tags))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            key: (tag),
        });
        (tag);
        // @ts-ignore
        [];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "article-meta" },
    });
    /** @type {__VLS_StyleScopedClasses['article-meta']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_30;
    /** @ts-ignore @type { | typeof __VLS_components.Timer} */
    Timer;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    (article.readTime);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_35;
    /** @ts-ignore @type { | typeof __VLS_components.View} */
    View;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    (article.views);
    if (article.cover) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            src: (article.cover),
            alt: (`${article.title}配图`),
            loading: "lazy",
        });
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-cover" },
        });
        /** @type {__VLS_StyleScopedClasses['text-cover']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (article.date.slice(0, 4));
        __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    }
    // @ts-ignore
    [];
    var __VLS_16;
    // @ts-ignore
    [];
}
if (!__VLS_ctx.visibleArticles.length) {
    let __VLS_40;
    /** @ts-ignore @type { | typeof __VLS_components.elEmpty | typeof __VLS_components.ElEmpty | typeof __VLS_components['el-empty']} */
    elEmpty;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
        description: "没有找到相关文章",
    }));
    const __VLS_42 = __VLS_41({
        description: "没有找到相关文章",
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "feed-more" },
});
/** @type {__VLS_StyleScopedClasses['feed-more']} */ ;
let __VLS_45;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
    to: "/archive",
}));
const __VLS_47 = __VLS_46({
    to: "/archive",
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
const { default: __VLS_50 } = __VLS_48.slots;
let __VLS_51;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent1(__VLS_51, new __VLS_51({
    size: "large",
}));
const __VLS_53 = __VLS_52({
    size: "large",
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
const { default: __VLS_56 } = __VLS_54.slots;
// @ts-ignore
[visibleArticles,];
var __VLS_54;
// @ts-ignore
[];
var __VLS_48;
__VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
    ...{ class: "home-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['home-sidebar']} */ ;
let __VLS_57;
/** @ts-ignore @type { | typeof __VLS_components.elCard | typeof __VLS_components.ElCard | typeof __VLS_components['el-card'] | typeof __VLS_components.elCard | typeof __VLS_components.ElCard | typeof __VLS_components['el-card']} */
elCard;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent1(__VLS_57, new __VLS_57({
    shadow: "never",
    ...{ class: "profile-card" },
}));
const __VLS_59 = __VLS_58({
    shadow: "never",
    ...{ class: "profile-card" },
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
/** @type {__VLS_StyleScopedClasses['profile-card']} */ ;
const { default: __VLS_62 } = __VLS_60.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "profile-line" },
});
/** @type {__VLS_StyleScopedClasses['profile-line']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "about-avatar small" },
});
/** @type {__VLS_StyleScopedClasses['about-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['small']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "profile-note" },
});
/** @type {__VLS_StyleScopedClasses['profile-note']} */ ;
let __VLS_63;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent1(__VLS_63, new __VLS_63({
    to: "/about",
}));
const __VLS_65 = __VLS_64({
    to: "/about",
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
const { default: __VLS_68 } = __VLS_66.slots;
let __VLS_69;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    text: true,
    type: "primary",
}));
const __VLS_71 = __VLS_70({
    text: true,
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
const { default: __VLS_74 } = __VLS_72.slots;
// @ts-ignore
[];
var __VLS_72;
// @ts-ignore
[];
var __VLS_66;
// @ts-ignore
[];
var __VLS_60;
let __VLS_75;
/** @ts-ignore @type { | typeof __VLS_components.elCard | typeof __VLS_components.ElCard | typeof __VLS_components['el-card'] | typeof __VLS_components.elCard | typeof __VLS_components.ElCard | typeof __VLS_components['el-card']} */
elCard;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent1(__VLS_75, new __VLS_75({
    shadow: "never",
    ...{ class: "side-card" },
}));
const __VLS_77 = __VLS_76({
    shadow: "never",
    ...{ class: "side-card" },
}, ...__VLS_functionalComponentArgsRest(__VLS_76));
/** @type {__VLS_StyleScopedClasses['side-card']} */ ;
const { default: __VLS_80 } = __VLS_78.slots;
{
    const { header: __VLS_81 } = __VLS_78.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "side-card-title" },
    });
    /** @type {__VLS_StyleScopedClasses['side-card-title']} */ ;
    let __VLS_82;
    /** @ts-ignore @type { | typeof __VLS_components.CollectionTag} */
    CollectionTag;
    // @ts-ignore
    const __VLS_83 = __VLS_asFunctionalComponent1(__VLS_82, new __VLS_82({}));
    const __VLS_84 = __VLS_83({}, ...__VLS_functionalComponentArgsRest(__VLS_83));
    // @ts-ignore
    [];
}
for (const [category] of __VLS_vFor((__VLS_ctx.categories.slice(1)))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.activeCategory = category);
                // @ts-ignore
                [categories, activeCategory,];
            } },
        key: (category),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (category);
    __VLS_asFunctionalElement1(__VLS_intrinsics.em, __VLS_intrinsics.em)({});
    (__VLS_ctx.articles.filter(item => item.category === category).length);
    // @ts-ignore
    [articles,];
}
// @ts-ignore
[];
var __VLS_78;
let __VLS_87;
/** @ts-ignore @type { | typeof __VLS_components.elCard | typeof __VLS_components.ElCard | typeof __VLS_components['el-card'] | typeof __VLS_components.elCard | typeof __VLS_components.ElCard | typeof __VLS_components['el-card']} */
elCard;
// @ts-ignore
const __VLS_88 = __VLS_asFunctionalComponent1(__VLS_87, new __VLS_87({
    shadow: "never",
    ...{ class: "side-card server-note" },
}));
const __VLS_89 = __VLS_88({
    shadow: "never",
    ...{ class: "side-card server-note" },
}, ...__VLS_functionalComponentArgsRest(__VLS_88));
/** @type {__VLS_StyleScopedClasses['side-card']} */ ;
/** @type {__VLS_StyleScopedClasses['server-note']} */ ;
const { default: __VLS_92 } = __VLS_90.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
// @ts-ignore
[];
var __VLS_90;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
