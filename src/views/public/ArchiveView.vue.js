import { computed, ref } from 'vue';
import { articles } from '@/data/mock';
import { Search, Timer, View } from '@element-plus/icons-vue';
const keyword = ref('');
const category = ref('全部');
const filtered = computed(() => articles.filter(article => {
    const categoryMatch = category.value === '全部' || article.category === category.value;
    const keywordMatch = !keyword.value || `${article.title}${article.summary}${article.tags.join('')}`.includes(keyword.value);
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
(__VLS_ctx.articles.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "archive-toolbar" },
});
/** @type {__VLS_StyleScopedClasses['archive-toolbar']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.keyword),
    prefixIcon: (__VLS_ctx.Search),
    placeholder: "搜索标题、摘要或标签",
    clearable: true,
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.keyword),
    prefixIcon: (__VLS_ctx.Search),
    placeholder: "搜索标题、摘要或标签",
    clearable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select'] | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select']} */
elSelect;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    modelValue: (__VLS_ctx.category),
}));
const __VLS_7 = __VLS_6({
    modelValue: (__VLS_ctx.category),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_10 } = __VLS_8.slots;
for (const [item] of __VLS_vFor((['全部', 'AI 实战', '实验记录', '年度总结']))) {
    let __VLS_11;
    /** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
    elOption;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
        key: (item),
        label: (item),
        value: (item),
    }));
    const __VLS_13 = __VLS_12({
        key: (item),
        label: (item),
        value: (item),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    // @ts-ignore
    [articles, keyword, Search, category,];
}
// @ts-ignore
[];
var __VLS_8;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "archive-list" },
});
/** @type {__VLS_StyleScopedClasses['archive-list']} */ ;
for (const [article] of __VLS_vFor((__VLS_ctx.filtered))) {
    let __VLS_16;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
        key: (article.id),
        to: (`/article/${article.slug}`),
        ...{ class: "archive-item" },
    }));
    const __VLS_18 = __VLS_17({
        key: (article.id),
        to: (`/article/${article.slug}`),
        ...{ class: "archive-item" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    /** @type {__VLS_StyleScopedClasses['archive-item']} */ ;
    const { default: __VLS_21 } = __VLS_19.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.time, __VLS_intrinsics.time)({});
    (article.date.slice(5).replace('-', ' / '));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "category-label" },
    });
    /** @type {__VLS_StyleScopedClasses['category-label']} */ ;
    (article.category);
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
    (article.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (article.summary);
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
        [filtered,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "archive-meta" },
    });
    /** @type {__VLS_StyleScopedClasses['archive-meta']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_22;
    /** @ts-ignore @type { | typeof __VLS_components.Timer} */
    Timer;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    (article.readTime);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_27;
    /** @ts-ignore @type { | typeof __VLS_components.View} */
    View;
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({}));
    const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
    (article.views);
    // @ts-ignore
    [];
    var __VLS_19;
    // @ts-ignore
    [];
}
if (!__VLS_ctx.filtered.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "empty-state" },
    });
    /** @type {__VLS_StyleScopedClasses['empty-state']} */ ;
}
// @ts-ignore
[filtered,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
