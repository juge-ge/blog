<script setup lang="ts">
import { computed, ref } from 'vue'
import { articles, profile } from '@/data/mock'
import { Search, Timer, View, Calendar, CollectionTag, Location } from '@element-plus/icons-vue'

const keyword = ref('')
const activeCategory = ref('全部')
const categories = ['全部', 'AI 实战', '实验记录', '年度总结']

const categoryCount = (category: string) =>
  category === '全部' ? articles.length : articles.filter((item) => item.category === category).length

const visibleArticles = computed(() => articles.filter((article) => {
  const categoryMatch = activeCategory.value === '全部' || article.category === activeCategory.value
  const keywordMatch = !keyword.value || `${article.title}${article.summary}`.toLowerCase().includes(keyword.value.toLowerCase())
  return categoryMatch && keywordMatch
}))
</script>

<template>
  <div class="home-feed container">
    <div class="feed-layout">
      <aside class="home-sidebar">
        <el-card shadow="never" class="side-card profile-card">
          <div class="profile-head">
            <img class="profile-avatar" :src="profile.avatar" :alt="`${profile.nickname}的头像`" />
            <strong>{{ profile.nickname }}</strong>
            <p class="profile-sign">{{ profile.signature }}</p>
            <span class="profile-location"><Location />{{ profile.location }}</span>
          </div>
          <div class="profile-stats">
            <RouterLink to="/archive" class="stat-cell">
              <strong>{{ profile.stats.articles }}</strong>
              <span>文章</span>
            </RouterLink>
            <RouterLink to="/album" class="stat-cell">
              <strong>{{ profile.stats.photos }}</strong>
              <span>照片</span>
            </RouterLink>
            <RouterLink to="/board" class="stat-cell">
              <strong>{{ profile.stats.messages }}</strong>
              <span>留言</span>
            </RouterLink>
          </div>
        </el-card>

        <el-card shadow="never" class="side-card">
          <template #header><div class="side-card-title"><CollectionTag />文章分类</div></template>
          <button v-for="category in categories.slice(1)" :key="category" @click="activeCategory = category">
            <span>{{ category }}</span>
            <em>{{ categoryCount(category) }}</em>
          </button>
        </el-card>
      </aside>

      <main class="post-feed">
        <header class="feed-header">
          <div>
            <h1>最近文章</h1>
          </div>
          <el-input v-model="keyword" :prefix-icon="Search" placeholder="搜索文章" clearable />
        </header>

        <div class="filter-tabs" role="tablist" aria-label="文章分类">
          <button
            v-for="category in categories"
            :key="category"
            :class="{ active: activeCategory === category }"
            role="tab"
            @click="activeCategory = category"
          >
            {{ category }}
            <em>{{ categoryCount(category) }}</em>
          </button>
        </div>

        <RouterLink
          v-for="article in visibleArticles"
          :key="article.id"
          :to="`/article/${article.slug}`"
          class="feed-post"
        >
          <img class="feed-post-cover" :src="article.cover" :alt="`${article.title}配图`" loading="lazy" />
          <div class="feed-post-copy">
            <div class="feed-post-meta">
              <el-tag size="small" effect="plain">{{ article.category }}</el-tag>
              <span><Calendar />{{ article.date }}</span>
              <span><Location />{{ article.location }}</span>
            </div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.summary }}</p>
            <div class="article-meta">
              <span><Timer />{{ article.readTime }}</span>
              <span><View />{{ article.views }} 次访问</span>
            </div>
          </div>
        </RouterLink>

        <el-empty v-if="!visibleArticles.length" description="没有找到相关文章" />

        <div class="feed-more">
          <RouterLink to="/archive"><el-button size="large">查看全部历史文章</el-button></RouterLink>
        </div>
      </main>
    </div>
  </div>
</template>
