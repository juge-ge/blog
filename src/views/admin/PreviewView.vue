<script setup lang="ts">
import { ref } from 'vue'
import { Monitor, Iphone, Refresh, TopRight } from '@element-plus/icons-vue'

const device = ref<'desktop' | 'mobile'>('desktop')
</script>

<template>
  <div class="preview-view"><div class="preview-toolbar"><div class="device-switch"><button :class="{active:device==='desktop'}" @click="device='desktop'"><Monitor />PC</button><button :class="{active:device==='mobile'}" @click="device='mobile'"><Iphone />手机</button></div><span>当前线上版本 · 发布于 12 分钟前</span><div><el-button :icon="Refresh">刷新</el-button><RouterLink to="/"><el-button type="primary" :icon="TopRight">打开网站</el-button></RouterLink></div></div><div class="device-stage"><div class="browser-frame" :class="device"><div class="browser-bar"><i></i><i></i><i></i><span>https://your-blog.com</span></div><iframe src="/" title="博客公开页面预览"></iframe></div></div></div>
</template>
