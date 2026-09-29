<script setup lang="ts">
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import { UploadFilled, View, CollectionTag } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const title = ref('如何用 Vue 3 构建清晰的管理后台')
const category = ref('前端开发')
const tags = ref(['Vue', 'Element Plus'])
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
`)

function saveDraft() { ElMessage.success('草稿已保存（原型演示）') }
function publish() { ElMessage.success('文章已发布（原型演示）') }
</script>

<template>
  <div class="editor-view">
    <div class="editor-actions"><div><span class="save-state"><i></i>已自动保存</span><small>最后保存于 14:32</small></div><div><el-button :icon="View">预览</el-button><el-button @click="saveDraft">保存草稿</el-button><el-button type="primary" @click="publish">发布文章</el-button></div></div>
    <div class="editor-layout"><section class="panel editor-main"><el-input v-model="title" class="title-input" placeholder="请输入文章标题" /><MdEditor v-model="content" :height="620" /></section><aside class="editor-settings"><section class="panel"><h3>发布设置</h3><label>文章分类</label><el-select v-model="category" style="width:100%"><el-option label="前端开发" value="前端开发" /><el-option label="产品思考" value="产品思考" /></el-select><label>文章标签</label><el-select v-model="tags" multiple allow-create filterable style="width:100%"><el-option label="Vue" value="Vue" /><el-option label="Element Plus" value="Element Plus" /></el-select><label>URL Slug</label><el-input model-value="vue-admin-design" /></section><section class="panel"><h3>文章封面</h3><div class="cover-upload"><UploadFilled /><strong>上传封面图片</strong><span>推荐 1600 × 900，自动压缩为 WebP</span></div></section><section class="panel"><h3><CollectionTag /> SEO 设置</h3><el-input placeholder="SEO 标题" /><el-input type="textarea" :rows="3" placeholder="文章描述" /></section></aside></div>
  </div>
</template>
