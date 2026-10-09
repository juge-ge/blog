<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { Search, Menu, Moon, Sunny, Close } from '@element-plus/icons-vue'

const app = useAppStore()
const mobileOpen = ref(false)
const keyword = ref('')
</script>

<template>
  <div class="public-shell">
    <header class="site-header">
      <div class="container header-inner">
        <nav class="desktop-nav" aria-label="主导航">
          <RouterLink to="/">首页</RouterLink>
          <RouterLink to="/archive">文章</RouterLink>
          <RouterLink to="/album">相册</RouterLink>
          <RouterLink to="/board">留言板</RouterLink>
          <RouterLink to="/links">友链</RouterLink>
        </nav>

        <div class="header-actions">
          <button class="icon-button" aria-label="搜索" @click="app.searchOpen = true"><Search /></button>
          <button class="icon-button" aria-label="切换主题" @click="app.toggleTheme()">
            <Sunny v-if="app.dark" /><Moon v-else />
          </button>
          <RouterLink class="admin-link" to="/admin/login">管理入口</RouterLink>
          <button class="icon-button mobile-menu" aria-label="打开菜单" @click="mobileOpen = !mobileOpen"><Menu /></button>
        </div>
      </div>

      <nav v-if="mobileOpen" class="mobile-nav">
        <RouterLink to="/" @click="mobileOpen = false">首页</RouterLink>
        <RouterLink to="/archive" @click="mobileOpen = false">文章</RouterLink>
        <RouterLink to="/album" @click="mobileOpen = false">相册</RouterLink>
        <RouterLink to="/board" @click="mobileOpen = false">留言板</RouterLink>
        <RouterLink to="/links" @click="mobileOpen = false">友链</RouterLink>
      </nav>
    </header>

    <main><RouterView /></main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-links"><RouterLink to="/archive">文章</RouterLink><RouterLink to="/album">相册</RouterLink><RouterLink to="/board">留言板</RouterLink><RouterLink to="/links">友链</RouterLink></div>
        <span>© 2026</span>
      </div>
    </footer>

    <div v-if="app.searchOpen" class="search-overlay" @click.self="app.searchOpen = false">
      <div class="search-panel">
        <div class="search-title"><strong>搜索文章</strong><button class="icon-button" @click="app.searchOpen = false"><Close /></button></div>
        <el-input v-model="keyword" size="large" placeholder="输入标题或关键词" :prefix-icon="Search" autofocus />
        <p class="search-hint">试试搜索：Vue、性能优化、毕业设计</p>
        <div v-if="keyword" class="search-result">
          <span class="search-dot"></span>
          找到 2 篇与“{{ keyword }}”相关的文章
        </div>
      </div>
    </div>
  </div>
</template>
