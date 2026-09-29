import { ref } from 'vue';
import { articles } from '@/data/mock';
import { Search, Plus, Edit, View, Delete } from '@element-plus/icons-vue';
import { ElMessageBox, ElMessage } from 'element-plus';
const keyword = ref('');
function remove(title) {
    ElMessageBox.confirm(`确认将《${title}》移入回收站吗？`, '删除文章', { type: 'warning' }).then(() => ElMessage.success('已移入回收站')).catch(() => { });
}
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
    ...{ class: "list-toolbar" },
});
/** @type {__VLS_StyleScopedClasses['list-toolbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.keyword),
    prefixIcon: (__VLS_ctx.Search),
    placeholder: "搜索文章标题",
    clearable: true,
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.keyword),
    prefixIcon: (__VLS_ctx.Search),
    placeholder: "搜索文章标题",
    clearable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select'] | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select']} */
elSelect;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    modelValue: "全部状态",
}));
const __VLS_7 = __VLS_6({
    modelValue: "全部状态",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_10 } = __VLS_8.slots;
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
elOption;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    label: "全部状态",
    value: "全部状态",
}));
const __VLS_13 = __VLS_12({
    label: "全部状态",
    value: "全部状态",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
let __VLS_16;
/** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
elOption;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    label: "已发布",
    value: "已发布",
}));
const __VLS_18 = __VLS_17({
    label: "已发布",
    value: "已发布",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_21;
/** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
elOption;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
    label: "草稿",
    value: "草稿",
}));
const __VLS_23 = __VLS_22({
    label: "草稿",
    value: "草稿",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
// @ts-ignore
[keyword, Search,];
var __VLS_8;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    to: "/admin/editor",
}));
const __VLS_28 = __VLS_27({
    to: "/admin/editor",
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
const { default: __VLS_31 } = __VLS_29.slots;
let __VLS_32;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    type: "primary",
    icon: (__VLS_ctx.Plus),
}));
const __VLS_34 = __VLS_33({
    type: "primary",
    icon: (__VLS_ctx.Plus),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_37 } = __VLS_35.slots;
// @ts-ignore
[Plus,];
var __VLS_35;
// @ts-ignore
[];
var __VLS_29;
let __VLS_38;
/** @ts-ignore @type { | typeof __VLS_components.elTable | typeof __VLS_components.ElTable | typeof __VLS_components['el-table'] | typeof __VLS_components.elTable | typeof __VLS_components.ElTable | typeof __VLS_components['el-table']} */
elTable;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    data: (__VLS_ctx.articles),
    ...{ class: "article-table" },
}));
const __VLS_40 = __VLS_39({
    data: (__VLS_ctx.articles),
    ...{ class: "article-table" },
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
/** @type {__VLS_StyleScopedClasses['article-table']} */ ;
const { default: __VLS_43 } = __VLS_41.slots;
let __VLS_44;
/** @ts-ignore @type { | typeof __VLS_components.elTableColumn | typeof __VLS_components.ElTableColumn | typeof __VLS_components['el-table-column'] | typeof __VLS_components.elTableColumn | typeof __VLS_components.ElTableColumn | typeof __VLS_components['el-table-column']} */
elTableColumn;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    label: "文章",
    minWidth: "310",
}));
const __VLS_46 = __VLS_45({
    label: "文章",
    minWidth: "310",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_49 } = __VLS_47.slots;
{
    const { default: __VLS_50 } = __VLS_47.slots;
    const [scope] = __VLS_vSlot(__VLS_50);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "table-article" },
    });
    /** @type {__VLS_StyleScopedClasses['table-article']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mini-cover" },
        ...{ class: (scope.row.tone) },
    });
    /** @type {__VLS_StyleScopedClasses['mini-cover']} */ ;
    (String(scope.row.id).padStart(2, '0'));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (scope.row.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    (scope.row.category);
    (scope.row.date);
    // @ts-ignore
    [articles,];
}
// @ts-ignore
[];
var __VLS_47;
let __VLS_51;
/** @ts-ignore @type { | typeof __VLS_components.elTableColumn | typeof __VLS_components.ElTableColumn | typeof __VLS_components['el-table-column'] | typeof __VLS_components.elTableColumn | typeof __VLS_components.ElTableColumn | typeof __VLS_components['el-table-column']} */
elTableColumn;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent1(__VLS_51, new __VLS_51({
    prop: "status",
    label: "状态",
    width: "110",
}));
const __VLS_53 = __VLS_52({
    prop: "status",
    label: "状态",
    width: "110",
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
const { default: __VLS_56 } = __VLS_54.slots;
{
    const { default: __VLS_57 } = __VLS_54.slots;
    const [scope] = __VLS_vSlot(__VLS_57);
    let __VLS_58;
    /** @ts-ignore @type { | typeof __VLS_components.elTag | typeof __VLS_components.ElTag | typeof __VLS_components['el-tag'] | typeof __VLS_components.elTag | typeof __VLS_components.ElTag | typeof __VLS_components['el-tag']} */
    elTag;
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent1(__VLS_58, new __VLS_58({
        type: (scope.row.status === '已发布' ? 'success' : 'info'),
        effect: "light",
    }));
    const __VLS_60 = __VLS_59({
        type: (scope.row.status === '已发布' ? 'success' : 'info'),
        effect: "light",
    }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    const { default: __VLS_63 } = __VLS_61.slots;
    (scope.row.status);
    // @ts-ignore
    [];
    var __VLS_61;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_54;
let __VLS_64;
/** @ts-ignore @type { | typeof __VLS_components.elTableColumn | typeof __VLS_components.ElTableColumn | typeof __VLS_components['el-table-column']} */
elTableColumn;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    prop: "views",
    label: "阅读量",
    width: "100",
}));
const __VLS_66 = __VLS_65({
    prop: "views",
    label: "阅读量",
    width: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
let __VLS_69;
/** @ts-ignore @type { | typeof __VLS_components.elTableColumn | typeof __VLS_components.ElTableColumn | typeof __VLS_components['el-table-column'] | typeof __VLS_components.elTableColumn | typeof __VLS_components.ElTableColumn | typeof __VLS_components['el-table-column']} */
elTableColumn;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    label: "操作",
    width: "185",
}));
const __VLS_71 = __VLS_70({
    label: "操作",
    width: "185",
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
const { default: __VLS_74 } = __VLS_72.slots;
{
    const { default: __VLS_75 } = __VLS_72.slots;
    const [scope] = __VLS_vSlot(__VLS_75);
    let __VLS_76;
    /** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
    elButton;
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent1(__VLS_76, new __VLS_76({
        circle: true,
        icon: (__VLS_ctx.Edit),
    }));
    const __VLS_78 = __VLS_77({
        circle: true,
        icon: (__VLS_ctx.Edit),
    }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    let __VLS_81;
    /** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
    elButton;
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent1(__VLS_81, new __VLS_81({
        ...{ 'onClick': {} },
        circle: true,
        icon: (__VLS_ctx.View),
    }));
    const __VLS_83 = __VLS_82({
        ...{ 'onClick': {} },
        circle: true,
        icon: (__VLS_ctx.View),
    }, ...__VLS_functionalComponentArgsRest(__VLS_82));
    let __VLS_86;
    const __VLS_87 = {
        /** @type {typeof __VLS_86.click} */
        onClick: (...[$event]) => {
            return (__VLS_ctx.$router.push(`/article/${scope.row.slug}`));
            // @ts-ignore
            [Edit, View, $router,];
        },
    };
    var __VLS_84;
    var __VLS_85;
    let __VLS_88;
    /** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
    elButton;
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent1(__VLS_88, new __VLS_88({
        ...{ 'onClick': {} },
        circle: true,
        type: "danger",
        plain: true,
        icon: (__VLS_ctx.Delete),
    }));
    const __VLS_90 = __VLS_89({
        ...{ 'onClick': {} },
        circle: true,
        type: "danger",
        plain: true,
        icon: (__VLS_ctx.Delete),
    }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    let __VLS_93;
    const __VLS_94 = {
        /** @type {typeof __VLS_93.click} */
        onClick: (...[$event]) => {
            return (__VLS_ctx.remove(scope.row.title));
            // @ts-ignore
            [Delete, remove,];
        },
    };
    var __VLS_91;
    var __VLS_92;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_72;
// @ts-ignore
[];
var __VLS_41;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "table-footer" },
});
/** @type {__VLS_StyleScopedClasses['table-footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
let __VLS_95;
/** @ts-ignore @type { | typeof __VLS_components.elPagination | typeof __VLS_components.ElPagination | typeof __VLS_components['el-pagination']} */
elPagination;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent1(__VLS_95, new __VLS_95({
    background: true,
    layout: "prev, pager, next",
    total: (42),
    pageSize: (10),
}));
const __VLS_97 = __VLS_96({
    background: true,
    layout: "prev, pager, next",
    total: (42),
    pageSize: (10),
}, ...__VLS_functionalComponentArgsRest(__VLS_96));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
