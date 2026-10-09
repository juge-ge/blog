<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { Right } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const app = useAppStore()

function enterBlog() {
  app.enterPublic()
  const target = typeof route.query.redirect === 'string' ? route.query.redirect : '/'
  router.push(target)
}
</script>

<template>
  <div class="entry-shell">
    <div class="entry-card">
      <span class="entry-mark">刘</span>
      <h1>欢迎</h1>
      <el-button type="primary" size="large" class="entry-button" @click="enterBlog">
        进入博客<Right />
      </el-button>
      <RouterLink class="entry-admin" to="/admin/login">管理员入口</RouterLink>
    </div>
  </div>
</template>
