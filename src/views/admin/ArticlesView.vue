<script setup lang="ts">
import { ref } from 'vue'
import { articles } from '@/data/mock'
import { Search, Plus, Edit, View, Delete } from '@element-plus/icons-vue'
import { ElMessageBox, ElMessage } from 'element-plus'

const keyword = ref('')
function remove(title: string) {
  ElMessageBox.confirm(`确认将《${title}》移入回收站吗？`, '删除文章', { type: 'warning' }).then(() => ElMessage.success('已移入回收站')).catch(() => {})
}
</script>

<template>
  <section class="panel content-panel"><div class="list-toolbar"><div><el-input v-model="keyword" :prefix-icon="Search" placeholder="搜索文章标题" clearable /><el-select model-value="全部状态"><el-option label="全部状态" value="全部状态" /><el-option label="已发布" value="已发布" /><el-option label="草稿" value="草稿" /></el-select></div><RouterLink to="/admin/editor"><el-button type="primary" :icon="Plus">新建文章</el-button></RouterLink></div><el-table :data="articles" class="article-table"><el-table-column label="文章" min-width="310"><template #default="scope"><div class="table-article"><div class="mini-cover" :class="scope.row.tone">{{ String(scope.row.id).padStart(2, '0') }}</div><div><strong>{{ scope.row.title }}</strong><small>{{ scope.row.category }} · {{ scope.row.date }}</small></div></div></template></el-table-column><el-table-column prop="status" label="状态" width="110"><template #default="scope"><el-tag :type="scope.row.status === '已发布' ? 'success' : 'info'" effect="light">{{ scope.row.status }}</el-tag></template></el-table-column><el-table-column prop="views" label="阅读量" width="100" /><el-table-column label="操作" width="185"><template #default="scope"><el-button circle :icon="Edit" /><el-button circle :icon="View" @click="$router.push(`/article/${scope.row.slug}`)" /><el-button circle type="danger" plain :icon="Delete" @click="remove(scope.row.title)" /></template></el-table-column></el-table><div class="table-footer"><span>共 42 篇文章，当前展示 4 篇原型数据</span><el-pagination background layout="prev, pager, next" :total="42" :page-size="10" /></div></section>
</template>
