<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { ElMessageBox } from 'element-plus'
import { Fold, Expand, House, Document, EditPen, ChatDotRound, Link, View, Bell } from '@element-plus/icons-vue'

const app = useAppStore()
const route = useRoute()
const router = useRouter()
const mobileOpen = ref(false)
const title = computed(() => String(route.meta.title || '管理平台'))
const adminName = computed(() => localStorage.getItem('blog_admin_name') || '管理员')

function logout() {
  ElMessageBox.confirm('确认退出管理平台吗？', '退出登录', { type: 'warning' })
    .then(() => {
      app.logoutAdmin()
      router.replace('/admin/login')
    })
    .catch(() => {})
}
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
      <RouterLink to="/" class="admin-brand"><span>刘</span><strong v-if="!app.adminCollapsed">管理台</strong></RouterLink>
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
          <span class="avatar">刘</span>
          <div><strong>{{ adminName }}</strong><small>管理员</small></div>
          <button class="admin-logout" @click="logout">退出登录</button>
        </div>
      </header>
      <div class="admin-content"><RouterView /></div>
    </section>
  </div>
</template>
