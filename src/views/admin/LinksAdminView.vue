<script setup lang="ts">
import { links } from '@/data/mock'
import { Plus, Edit, Delete, TopRight } from '@element-plus/icons-vue'
</script>

<template>
  <section class="panel content-panel"><div class="list-toolbar"><div><h2>友情链接</h2><p>管理展示在博客友链页面的站点</p></div><el-button type="primary" :icon="Plus">添加友链</el-button></div><div class="admin-link-list"><div v-for="item in links" :key="item.name" class="admin-link-item"><span class="friend-avatar" :style="{background:item.color}">{{ item.initials }}</span><div><strong>{{ item.name }}</strong><p>{{ item.desc }}</p><small>{{ item.url }}</small></div><el-tag type="success">展示中</el-tag><div><el-button circle :icon="TopRight" /><el-button circle :icon="Edit" /><el-button circle type="danger" plain :icon="Delete" /></div></div></div></section>
</template>
