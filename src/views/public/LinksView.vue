<script setup lang="ts">
import { links } from '@/data/mock'
import { TopRight } from '@element-plus/icons-vue'
</script>

<template>
  <div class="container page-wrap">
    <div class="page-intro"><span class="section-kicker">FRIENDS</span><h1>友情链接</h1><p>一些持续输出、值得常去看看的个人站点。</p></div>
    <div class="friends-grid"><a v-for="item in links" :key="item.name" :href="item.url" target="_blank" rel="noopener noreferrer" class="friend-card"><span class="friend-avatar" :style="{ background: item.color }">{{ item.initials }}</span><div><h2>{{ item.name }}</h2><p>{{ item.desc }}</p></div><TopRight /></a></div>
    <div class="link-note"><strong>交换友链</strong><p>如果你也在认真写作，欢迎通过关于页面的联系方式申请友链。</p></div>
  </div>
</template>
