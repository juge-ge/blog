import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import { UploadFilled, View, CollectionTag } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
const title = ref('如何用 Vue 3 构建清晰的管理后台');
const category = ref('前端开发');
const tags = ref(['Vue', 'Element Plus']);
const content = ref(`# 如何用 Vue 3 构建清晰的管理后台

后台系统的重点不是“功能很多”，而是让使用者快速找到当前要完成的任务。

## 先建立稳定的页面骨架

常见的管理后台由侧边导航、顶部工具栏和内容区域组成。我们会使用 Vue Router 管理页面，用 Pinia 保存全局状态。

> 好的后台界面，应当让状态明确、反馈及时、操作可撤销。

## 目录建议

\`\`\`text
src/
├── views/       页面
├── components/  公共组件
├── stores/      Pinia 状态
└── services/    Axios 请求
\`\`\`
`);
function saveDraft() { ElMessage.success('草稿已保存（原型演示）'); }
function publish() { ElMessage.success('文章已发布（原型演示）'); }
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "editor-view" },
});
/** @type {__VLS_StyleScopedClasses['editor-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "editor-actions" },
});
/** @type {__VLS_StyleScopedClasses['editor-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "save-state" },
});
/** @type {__VLS_StyleScopedClasses['save-state']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: (__VLS_ctx.View),
}));
const __VLS_2 = __VLS_1({
    icon: (__VLS_ctx.View),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
// @ts-ignore
[View,];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    ...{ 'onClick': {} },
}));
const __VLS_8 = __VLS_7({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_11;
const __VLS_12 = {
    /** @type {typeof __VLS_11.click} */
    onClick: (__VLS_ctx.saveDraft),
};
const { default: __VLS_13 } = __VLS_9.slots;
// @ts-ignore
[saveDraft,];
var __VLS_9;
var __VLS_10;
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    ...{ 'onClick': {} },
    type: "primary",
}));
const __VLS_16 = __VLS_15({
    ...{ 'onClick': {} },
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
let __VLS_19;
const __VLS_20 = {
    /** @type {typeof __VLS_19.click} */
    onClick: (__VLS_ctx.publish),
};
const { default: __VLS_21 } = __VLS_17.slots;
// @ts-ignore
[publish,];
var __VLS_17;
var __VLS_18;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "editor-layout" },
});
/** @type {__VLS_StyleScopedClasses['editor-layout']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "panel editor-main" },
});
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['editor-main']} */ ;
let __VLS_22;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    modelValue: (__VLS_ctx.title),
    ...{ class: "title-input" },
    placeholder: "请输入文章标题",
}));
const __VLS_24 = __VLS_23({
    modelValue: (__VLS_ctx.title),
    ...{ class: "title-input" },
    placeholder: "请输入文章标题",
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
/** @type {__VLS_StyleScopedClasses['title-input']} */ ;
let __VLS_27;
/** @ts-ignore @type { | typeof __VLS_components.MdEditor} */
MdEditor;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent1(__VLS_27, new __VLS_27({
    modelValue: (__VLS_ctx.content),
    height: (620),
}));
const __VLS_29 = __VLS_28({
    modelValue: (__VLS_ctx.content),
    height: (620),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
__VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
    ...{ class: "editor-settings" },
});
/** @type {__VLS_StyleScopedClasses['editor-settings']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "panel" },
});
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
let __VLS_32;
/** @ts-ignore @type { | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select'] | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select']} */
elSelect;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    modelValue: (__VLS_ctx.category),
    ...{ style: {} },
}));
const __VLS_34 = __VLS_33({
    modelValue: (__VLS_ctx.category),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_37 } = __VLS_35.slots;
let __VLS_38;
/** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
elOption;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    label: "前端开发",
    value: "前端开发",
}));
const __VLS_40 = __VLS_39({
    label: "前端开发",
    value: "前端开发",
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
let __VLS_43;
/** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
elOption;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    label: "产品思考",
    value: "产品思考",
}));
const __VLS_45 = __VLS_44({
    label: "产品思考",
    value: "产品思考",
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
// @ts-ignore
[title, content, category,];
var __VLS_35;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
let __VLS_48;
/** @ts-ignore @type { | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select'] | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select']} */
elSelect;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({
    modelValue: (__VLS_ctx.tags),
    multiple: true,
    allowCreate: true,
    filterable: true,
    ...{ style: {} },
}));
const __VLS_50 = __VLS_49({
    modelValue: (__VLS_ctx.tags),
    multiple: true,
    allowCreate: true,
    filterable: true,
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_53 } = __VLS_51.slots;
let __VLS_54;
/** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
elOption;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    label: "Vue",
    value: "Vue",
}));
const __VLS_56 = __VLS_55({
    label: "Vue",
    value: "Vue",
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
let __VLS_59;
/** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
elOption;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    label: "Element Plus",
    value: "Element Plus",
}));
const __VLS_61 = __VLS_60({
    label: "Element Plus",
    value: "Element Plus",
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
// @ts-ignore
[tags,];
var __VLS_51;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
let __VLS_64;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    modelValue: "vue-admin-design",
}));
const __VLS_66 = __VLS_65({
    modelValue: "vue-admin-design",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "panel" },
});
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cover-upload" },
});
/** @type {__VLS_StyleScopedClasses['cover-upload']} */ ;
let __VLS_69;
/** @ts-ignore @type { | typeof __VLS_components.UploadFilled} */
UploadFilled;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({}));
const __VLS_71 = __VLS_70({}, ...__VLS_functionalComponentArgsRest(__VLS_70));
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "panel" },
});
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
let __VLS_74;
/** @ts-ignore @type { | typeof __VLS_components.CollectionTag} */
CollectionTag;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({}));
const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
let __VLS_79;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
    placeholder: "SEO 标题",
}));
const __VLS_81 = __VLS_80({
    placeholder: "SEO 标题",
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
let __VLS_84;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent1(__VLS_84, new __VLS_84({
    type: "textarea",
    rows: (3),
    placeholder: "文章描述",
}));
const __VLS_86 = __VLS_85({
    type: "textarea",
    rows: (3),
    placeholder: "文章描述",
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
