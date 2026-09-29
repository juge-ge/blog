<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { Fold, Expand, House, Document, EditPen, ChatDotRound, Link, View, Bell, ArrowDown } from '@element-plus/icons-vue'

const app = useAppStore()
const route = useRoute()
const mobileOpen = ref(false)
const title = computed(() => String(route.meta.title || '管理平台'))
const menu = [
  { to: '/admin/dashboard', label: '数据概览', icon: House },
  { to: '/admin/articles', label: '文章管理', icon: Document },
  { to: '/admin/editor', label: '写文章', icon: EditPen },
  { to: '/admin/comments', label: '评论管理', icon: ChatDotRound, badge: 4 },
  { to: '/admin/links', label: '友链管理', icon: Link },
  { to: '/admin/preview', label: '全站预览', icon: View },
]
</script>

<template>
  <div class="admin-shell">
    <aside class="admin-sidebar" :class="{ collapsed: app.adminCollapsed, open: mobileOpen }">
      <RouterLink to="/" class="admin-brand"><span>远</span><strong v-if="!app.adminCollapsed">远光管理台</strong></RouterLink>
      <nav class="admin-menu">
        <RouterLink v-for="item in menu" :key="item.to" :to="item.to" @click="mobileOpen = false">
          <component :is="item.icon" />
          <span v-if="!app.adminCollapsed">{{ item.label }}</span>
          <em v-if="item.badge && !app.adminCollapsed">{{ item.badge }}</em>
        </RouterLink>
      </nav>
      <div v-if="!app.adminCollapsed" class="sidebar-status"><i></i><div><strong>网站运行正常</strong><small>最近检查 1 分钟前</small></div></div>
    </aside>

    <div v-if="mobileOpen" class="sidebar-mask" @click="mobileOpen = false"></div>

    <section class="admin-main" :class="{ expanded: app.adminCollapsed }">
      <header class="admin-topbar">
        <button class="icon-button desktop-collapse" @click="app.toggleAdmin()"><Expand v-if="app.adminCollapsed" /><Fold v-else /></button>
        <button class="icon-button admin-mobile-menu" @click="mobileOpen = true"><Expand /></button>
        <div class="admin-title"><h1>{{ title }}</h1><p>星期二，2026 年 9 月 29 日</p></div>
        <div class="admin-user">
          <button class="icon-button notice-button"><Bell /><b>4</b></button>
          <span class="avatar">林</span>
          <div><strong>林远</strong><small>管理员</small></div>
          <ArrowDown class="down" />
        </div>
      </header>
      <div class="admin-content"><RouterView /></div>
    </section>
  </div>
</template>
