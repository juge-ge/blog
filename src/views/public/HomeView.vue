<script setup lang="ts">
import { computed, ref } from 'vue'
import { articles } from '@/data/mock'
import { Search, Timer, View, Calendar, CollectionTag } from '@element-plus/icons-vue'

const keyword = ref('')
const activeCategory = ref('全部')
const categories = ['全部', 'AI 实战', '实验记录', '年度总结']

const visibleArticles = computed(() => articles.filter((article) => {
  const categoryMatch = activeCategory.value === '全部' || article.category === activeCategory.value
  const keywordMatch = !keyword.value || `${article.title}${article.summary}${article.tags.join('')}`.toLowerCase().includes(keyword.value.toLowerCase())
  return categoryMatch && keywordMatch
}))
</script>

<template>
  <div class="home-feed container">
    <header class="feed-header">
      <div>
        <h1>最近文章</h1>
        <p>记录技术实践、实验过程和阶段性思考。</p>
      </div>
      <el-input v-model="keyword" :prefix-icon="Search" placeholder="搜索文章" clearable />
    </header>

    <div class="category-tabs compact-tabs" role="tablist" aria-label="文章分类">
      <el-button
        v-for="category in categories"
        :key="category"
        :type="activeCategory === category ? 'primary' : 'default'"
        round
        @click="activeCategory = category"
      >
        {{ category }}
      </el-button>
    </div>

    <div class="feed-layout">
      <main class="post-feed">
        <RouterLink
          v-for="article in visibleArticles"
          :key="article.id"
          :to="`/article/${article.slug}`"
          class="feed-post"
        >
          <div class="feed-post-copy">
            <div class="feed-post-meta">
              <el-tag size="small" effect="plain">{{ article.category }}</el-tag>
              <span><Calendar />{{ article.date }}</span>
            </div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.summary }}</p>
            <div class="feed-post-bottom">
              <div class="tag-row">
                <span v-for="tag in article.tags" :key="tag"># {{ tag }}</span>
              </div>
              <div class="article-meta">
                <span><Timer />{{ article.readTime }}</span>
                <span><View />{{ article.views }}</span>
              </div>
            </div>
          </div>
          <img v-if="article.cover" :src="article.cover" :alt="`${article.title}配图`" loading="lazy" />
          <div v-else class="text-cover"><span>{{ article.date.slice(0, 4) }}</span><strong>年度记录</strong></div>
        </RouterLink>

        <el-empty v-if="!visibleArticles.length" description="没有找到相关文章" />

        <div class="feed-more">
          <RouterLink to="/archive"><el-button size="large">查看全部历史文章</el-button></RouterLink>
        </div>
      </main>

      <aside class="home-sidebar">
        <el-card shadow="never" class="profile-card">
          <div class="profile-line"><span class="about-avatar small">刘</span><div><strong>Liu Yang</strong><p>记录学习、实验与生活</p></div></div>
          <p class="profile-note">这个博客保留真实的项目过程和阶段性总结，内容来自原服务器博客样例。</p>
          <RouterLink to="/about"><el-button text type="primary">关于作者</el-button></RouterLink>
        </el-card>

        <el-card shadow="never" class="side-card">
          <template #header><div class="side-card-title"><CollectionTag />文章分类</div></template>
          <button v-for="category in categories.slice(1)" :key="category" @click="activeCategory = category">
            <span>{{ category }}</span>
            <em>{{ articles.filter(item => item.category === category).length }}</em>
          </button>
        </el-card>

        <el-card shadow="never" class="side-card server-note">
          <strong>已导入原博客样例</strong>
          <p>当前展示 4 篇来自服务器的文章，正文页面使用节选内容和原始配图。</p>
        </el-card>
      </aside>
    </div>
  </div>
</template>
