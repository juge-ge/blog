import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { MdPreview } from 'md-editor-v3';
import { articles } from '@/data/mock';
import { Timer, View, ChatDotRound, CopyDocument } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
const route = useRoute();
const article = computed(() => articles.find(item => item.slug === route.params.slug) || articles[0]);
const nickname = ref('');
const comment = ref('');
const comments = ref([
    { name: '一位路过的读者', time: '2 天前', content: '“状态离使用它的地方越近”这句话很有启发，期待后续的项目案例。' },
    { name: '站长回复', time: '1 天前', content: '谢谢！下一篇会结合这个博客的 Pinia 模块来展开。', admin: true },
]);
function submitComment() {
    if (!nickname.value.trim() || !comment.value.trim())
        return ElMessage.warning('请填写昵称和评论内容');
    comments.value.push({ name: nickname.value, time: '刚刚 · 待审核', content: comment.value });
    comment.value = '';
    ElMessage.success('评论已提交，审核后将公开显示');
}
function copyLink() {
    navigator.clipboard?.writeText(location.href);
    ElMessage.success('文章链接已复制');
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "article-page" },
});
/** @type {__VLS_StyleScopedClasses['article-page']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container article-header" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['article-header']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: "/archive",
    ...{ class: "back-link" },
}));
const __VLS_2 = __VLS_1({
    to: "/archive",
    ...{ class: "back-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
(__VLS_ctx.article.category);
// @ts-ignore
[article,];
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
(__VLS_ctx.article.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.article.summary);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "article-byline" },
});
/** @type {__VLS_StyleScopedClasses['article-byline']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "mini-avatar" },
});
/** @type {__VLS_StyleScopedClasses['mini-avatar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
(__VLS_ctx.article.date);
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.Timer} */
Timer;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
(__VLS_ctx.article.readTime);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.View} */
View;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
(__VLS_ctx.article.views);
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.copyLink) },
});
let __VLS_16;
/** @ts-ignore @type { | typeof __VLS_components.CopyDocument} */
CopyDocument;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "reading-progress" },
});
/** @type {__VLS_StyleScopedClasses['reading-progress']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container article-layout" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['article-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "article-body" },
});
/** @type {__VLS_StyleScopedClasses['article-body']} */ ;
let __VLS_21;
/** @ts-ignore @type { | typeof __VLS_components.MdPreview} */
MdPreview;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
    modelValue: (__VLS_ctx.article.content),
}));
const __VLS_23 = __VLS_22({
    modelValue: (__VLS_ctx.article.content),
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
    ...{ class: "article-toc" },
});
/** @type {__VLS_StyleScopedClasses['article-toc']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toc-divider" },
});
/** @type {__VLS_StyleScopedClasses['toc-divider']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "tag-row" },
});
/** @type {__VLS_StyleScopedClasses['tag-row']} */ ;
for (const [tag] of __VLS_vFor((__VLS_ctx.article.tags))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({
        key: (tag),
    });
    (tag);
    // @ts-ignore
    [article, article, article, article, article, article, article, copyLink,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "container comments-section" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['comments-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "comments-heading" },
});
/** @type {__VLS_StyleScopedClasses['comments-heading']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "section-kicker" },
});
/** @type {__VLS_StyleScopedClasses['section-kicker']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.em, __VLS_intrinsics.em)({});
(__VLS_ctx.comments.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "comment-form" },
});
/** @type {__VLS_StyleScopedClasses['comment-form']} */ ;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    modelValue: (__VLS_ctx.nickname),
    placeholder: "你的昵称（必填）",
}));
const __VLS_28 = __VLS_27({
    modelValue: (__VLS_ctx.nickname),
    placeholder: "你的昵称（必填）",
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
let __VLS_31;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    modelValue: (__VLS_ctx.comment),
    type: "textarea",
    rows: (4),
    placeholder: "友善交流，认真表达……",
    maxlength: "500",
    showWordLimit: true,
}));
const __VLS_33 = __VLS_32({
    modelValue: (__VLS_ctx.comment),
    type: "textarea",
    rows: (4),
    placeholder: "友善交流，认真表达……",
    maxlength: "500",
    showWordLimit: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
let __VLS_36;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    ...{ 'onClick': {} },
    type: "primary",
    icon: (__VLS_ctx.ChatDotRound),
}));
const __VLS_38 = __VLS_37({
    ...{ 'onClick': {} },
    type: "primary",
    icon: (__VLS_ctx.ChatDotRound),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
let __VLS_41;
const __VLS_42 = {
    /** @type {typeof __VLS_41.click} */
    onClick: (__VLS_ctx.submitComment),
};
const { default: __VLS_43 } = __VLS_39.slots;
// @ts-ignore
[comments, nickname, comment, ChatDotRound, submitComment,];
var __VLS_39;
var __VLS_40;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "comment-list" },
});
/** @type {__VLS_StyleScopedClasses['comment-list']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.comments))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (item.name + item.time),
        ...{ class: "comment-item" },
        ...{ class: ({ admin: item.admin }) },
    });
    /** @type {__VLS_StyleScopedClasses['comment-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['admin']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "comment-avatar" },
    });
    /** @type {__VLS_StyleScopedClasses['comment-avatar']} */ ;
    (item.name.slice(0, 1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (item.name);
    if (item.admin) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.em, __VLS_intrinsics.em)({});
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.time, __VLS_intrinsics.time)({});
    (item.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    (item.content);
    // @ts-ignore
    [comments,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
