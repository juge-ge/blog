import { ref } from 'vue';
import { Check, Delete, ChatDotRound } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
const tab = ref('待审核');
const comments = [
    { name: '小周', ip: '117.***.42.18', article: 'Vue 3 项目中的状态边界', content: '这篇很有帮助，能不能再补充一个大型项目的案例？', time: '今天 13:46' },
    { name: '匿名读者', ip: '39.***.128.7', article: '博客图片优化实践', content: 'WebP 的兼容性现在怎么样，是否还需要保留原图？', time: '今天 10:12' },
    { name: '星河', ip: '183.***.76.31', article: '毕业设计开发日志', content: '目录拆分得很清楚，期待后续更新。', time: '昨天 22:38' },
];
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "panel content-panel" },
});
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['content-panel']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "comment-toolbar" },
});
/** @type {__VLS_StyleScopedClasses['comment-toolbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "segmented" },
});
/** @type {__VLS_StyleScopedClasses['segmented']} */ ;
for (const [item] of __VLS_vFor((['待审核', '已通过', '垃圾评论']))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                return (__VLS_ctx.tab = item);
                // @ts-ignore
                [tab,];
            } },
        key: (item),
        ...{ class: ({ active: __VLS_ctx.tab === item }) },
    });
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (item);
    if (item === '待审核') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.em, __VLS_intrinsics.em)({});
    }
    // @ts-ignore
    [tab,];
}
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    placeholder: "搜索昵称、IP 或内容",
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    placeholder: "搜索昵称、IP 或内容",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "review-list" },
});
/** @type {__VLS_StyleScopedClasses['review-list']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.comments))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (item.time),
        ...{ class: "review-item" },
    });
    /** @type {__VLS_StyleScopedClasses['review-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "comment-avatar" },
    });
    /** @type {__VLS_StyleScopedClasses['comment-avatar']} */ ;
    (item.name.slice(0, 1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "review-content" },
    });
    /** @type {__VLS_StyleScopedClasses['review-content']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (item.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item.ip);
    __VLS_asFunctionalElement1(__VLS_intrinsics.time, __VLS_intrinsics.time)({});
    (item.time);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (item.content);
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    (item.article);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "review-actions" },
    });
    /** @type {__VLS_StyleScopedClasses['review-actions']} */ ;
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
    elButton;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        ...{ 'onClick': {} },
        type: "success",
        plain: true,
        icon: (__VLS_ctx.Check),
    }));
    const __VLS_7 = __VLS_6({
        ...{ 'onClick': {} },
        type: "success",
        plain: true,
        icon: (__VLS_ctx.Check),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    let __VLS_10;
    const __VLS_11 = {
        /** @type {typeof __VLS_10.click} */
        onClick: (...[$event]) => {
            return (__VLS_ctx.ElMessage.success('评论已通过'));
            // @ts-ignore
            [comments, Check, ElMessage,];
        },
    };
    const { default: __VLS_12 } = __VLS_8.slots;
    // @ts-ignore
    [];
    var __VLS_8;
    var __VLS_9;
    let __VLS_13;
    /** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
    elButton;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        icon: (__VLS_ctx.ChatDotRound),
    }));
    const __VLS_15 = __VLS_14({
        icon: (__VLS_ctx.ChatDotRound),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const { default: __VLS_18 } = __VLS_16.slots;
    // @ts-ignore
    [ChatDotRound,];
    var __VLS_16;
    let __VLS_19;
    /** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
    elButton;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
        type: "danger",
        plain: true,
        icon: (__VLS_ctx.Delete),
    }));
    const __VLS_21 = __VLS_20({
        type: "danger",
        plain: true,
        icon: (__VLS_ctx.Delete),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const { default: __VLS_24 } = __VLS_22.slots;
    // @ts-ignore
    [Delete,];
    var __VLS_22;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
