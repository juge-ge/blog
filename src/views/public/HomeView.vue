<script setup lang="ts">
import { computed, ref } from 'vue'
import { articles } from '@/data/mock'
import { ArrowRight, Timer, View } from '@element-plus/icons-vue'

const activeCategory = ref('全部')
const categories = ['全部', '前端开发', '产品思考', '性能优化', '开发日志']
const visibleArticles = computed(() => activeCategory.value === '全部' ? articles : articles.filter(a => a.category === activeCategory.value))
</script>

<template>
  <div>
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow"><i></i>持续写作第 186 天</span>
          <h1>记录问题，<br><em>也记录答案。</em></h1>
          <p>这里分享前端开发、产品设计与独立创作。希望每一篇文章，都能帮你把一个问题看得更清楚。</p>
          <div class="hero-actions">
            <RouterLink to="/archive" class="primary-button">浏览全部文章 <ArrowRight /></RouterLink>
            <RouterLink to="/about" class="text-link">认识作者</RouterLink>
          </div>
          <div class="hero-stats"><span><strong>42</strong>篇文章</span><span><strong>18.6k</strong>次阅读</span><span><strong>24</strong>个标签</span></div>
        </div>
        <RouterLink :to="`/article/${articles[0].slug}`" class="featured-card">
          <div class="feature-visual"><span>EDITOR'S PICK</span><div class="visual-lines"><i></i><i></i><i></i><i></i></div><b>01</b></div>
          <div class="feature-body">
            <span class="category-label">{{ articles[0].category }}</span>
            <h2>{{ articles[0].title }}</h2>
            <p>{{ articles[0].summary }}</p>
            <div class="article-meta"><span>{{ articles[0].date }}</span><span><Timer />{{ articles[0].readTime }}</span></div>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="article-section container">
      <div class="section-heading"><div><span class="section-kicker">LATEST NOTES</span><h2>最近更新</h2></div><RouterLink to="/archive">查看归档 <ArrowRight /></RouterLink></div>
      <div class="category-tabs">
        <button v-for="category in categories" :key="category" :class="{ active: activeCategory === category }" @click="activeCategory = category">{{ category }}</button>
      </div>
      <div class="article-grid">
        <RouterLink v-for="article in visibleArticles.slice(1)" :key="article.id" :to="`/article/${article.slug}`" class="article-card">
          <div class="card-visual" :class="article.tone"><span>{{ String(article.id).padStart(2, '0') }}</span><i></i></div>
          <div class="card-content"><span class="category-label">{{ article.category }}</span><h3>{{ article.title }}</h3><p>{{ article.summary }}</p><div class="article-meta"><span>{{ article.date }}</span><span><Timer />{{ article.readTime }}</span><span><View />{{ article.views }}</span></div></div>
        </RouterLink>
      </div>
    </section>

    <section class="newsletter-section">
      <div class="container newsletter-inner"><div><span class="section-kicker">KEEP IN TOUCH</span><h2>不错过下一篇好文章</h2><p>每月一封邮件，只分享新文章和近期思考。</p></div><div class="subscribe"><el-input placeholder="你的邮箱地址" size="large" /><el-button type="primary" size="large">订阅更新</el-button></div></div>
    </section>
  </div>
</template>
