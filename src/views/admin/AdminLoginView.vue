<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const app = useAppStore()

const username = ref('')
const password = ref('')
const loading = ref(false)

function submit() {
  if (!username.value.trim() || !password.value.trim()) {
    ElMessage.warning('请输入账号和密码')
    return
  }
  loading.value = true
  window.setTimeout(() => {
    app.loginAdmin(username.value.trim())
    loading.value = false
    ElMessage.success('登录成功')
    const target = typeof route.query.redirect === 'string' ? route.query.redirect : '/admin/dashboard'
    router.replace(target)
  }, 400)
}
</script>

<template>
  <div class="admin-login-shell">
    <div class="admin-login-card">
      <div class="admin-login-head">
        <span class="admin-login-mark">刘</span>
        <div>
          <h1>管理平台登录</h1>
          <p>仅站点管理员可访问</p>
        </div>
      </div>

      <el-form class="admin-login-form" @submit.prevent="submit">
        <label>管理员账号</label>
        <el-input v-model="username" size="large" :prefix-icon="User" placeholder="请输入账号" @keyup.enter="submit" />
        <label>登录密码</label>
        <el-input
          v-model="password"
          size="large"
          type="password"
          show-password
          :prefix-icon="Lock"
          placeholder="请输入密码"
          @keyup.enter="submit"
        />
        <el-button type="primary" size="large" class="admin-login-button" :loading="loading" @click="submit">登录</el-button>
      </el-form>

      <p class="admin-login-hint">演示环境：任意账号与密码均可登录</p>
      <RouterLink class="admin-login-back" to="/login">返回展示平台</RouterLink>
    </div>
  </div>
</template>
