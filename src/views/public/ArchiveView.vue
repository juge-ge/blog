<script setup lang="ts">
import { computed, ref } from 'vue'
import { articles } from '@/data/mock'
import { Search, Timer, View } from '@element-plus/icons-vue'

const keyword = ref('')
const category = ref('全部')
const filtered = computed(() => articles.filter(article => {
  const categoryMatch = category.value === '全部' || article.category === category.value
  const keywordMatch = !keyword.value || `${article.title}${article.summary}${article.tags.join('')}`.includes(keyword.value)
  return categoryMatch && keywordMatch
}))
</script>

<template>
  <div class="container page-wrap">
    <div class="page-intro"><span class="section-kicker">ARCHIVE</span><h1>全部文章</h1><p>共 {{ articles.length }} 篇内容，关于技术、产品与持续创造。</p></div>
    <div class="archive-toolbar"><el-input v-model="keyword" :prefix-icon="Search" placeholder="搜索标题、摘要或标签" clearable /><el-select v-model="category"><el-option v-for="item in ['全部','AI 实战','实验记录','年度总结']" :key="item" :label="item" :value="item" /></el-select></div>
    <div class="archive-list">
      <RouterLink v-for="article in filtered" :key="article.id" :to="`/article/${article.slug}`" class="archive-item">
        <time>{{ article.date.slice(5).replace('-', ' / ') }}</time>
        <div><span class="category-label">{{ article.category }}</span><h2>{{ article.title }}</h2><p>{{ article.summary }}</p><div class="tag-row"><span v-for="tag in article.tags" :key="tag"># {{ tag }}</span></div></div>
        <div class="archive-meta"><span><Timer />{{ article.readTime }}</span><span><View />{{ article.views }}</span></div>
      </RouterLink>
      <div v-if="!filtered.length" class="empty-state">没有找到符合条件的文章</div>
    </div>
  </div>
</template>
