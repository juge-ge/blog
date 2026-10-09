<script setup lang="ts">
import { computed, ref } from 'vue'
import { articles, albums } from '@/data/mock'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const articleCovers = articles.filter((item) => item.cover)

// 合并后的相册列表：固定的「博客文章插图」排第一，后面是作者自定义相册
const allAlbums = computed(() => [
  {
    id: 0,
    name: '博客文章插图',
    count: articleCovers.length,
    date: '随文章更新',
    cover: articleCovers[0]?.cover ?? '',
    fixed: true,
  },
  ...albums,
])

// 访客上传的照片（mock：仅保存在当前浏览器，不上传服务器）
const visitorPhotos = ref<{ id: number; url: string; name: string }[]>([])
const fileInput = ref<HTMLInputElement>()

function pickFiles() {
  fileInput.value?.click()
}

function onFiles(event: Event) {
  const files = (event.target as HTMLInputElement).files
  if (!files?.length) return
  for (const file of Array.from(files)) {
    if (!file.type.startsWith('image/')) continue
    visitorPhotos.value.push({ id: Date.now() + Math.random(), url: URL.createObjectURL(file), name: file.name })
  }
  ;(event.target as HTMLInputElement).value = ''
  ElMessage.success('已添加到访客照片墙（当前为本地预览，不会上传服务器）')
}

function removePhoto(id: number) {
  visitorPhotos.value = visitorPhotos.value.filter((item) => item.id !== id)
}
</script>

<template>
  <div class="page-wrap container">
    <header class="page-intro">
      <h1>相册</h1>
      <p>用照片定格生活，按相册分类整理。当前为 mock 数据，后续接入真实照片。</p>
    </header>

    <section class="album-section">
      <h2 class="album-section-title">访客照片墙</h2>
      <p class="album-section-desc">来访的朋友也可以留下自己的照片。当前为 mock：照片仅保存在当前浏览器，不会上传服务器。</p>
      <div class="visitor-wall">
        <button class="upload-tile" @click="pickFiles">
          <Plus />
          <span>上传照片</span>
        </button>
        <div v-for="photo in visitorPhotos" :key="photo.id" class="visitor-photo">
          <img :src="photo.url" :alt="photo.name" />
          <button class="visitor-photo-remove" title="移除" @click="removePhoto(photo.id)">×</button>
        </div>
      </div>
      <input ref="fileInput" type="file" accept="image/*" multiple hidden @change="onFiles" />
    </section>

    <section class="album-section">
      <h2 class="album-section-title">我的相册</h2>
      <div class="album-grid">
        <div v-for="album in allAlbums" :key="album.id" class="album-card">
          <div v-if="album.fixed" class="album-cover album-collage">
            <img v-for="item in articleCovers" :key="item.id" :src="item.cover" :alt="`${item.title}插图`" loading="lazy" />
          </div>
          <div v-else class="album-cover">
            <img :src="album.cover" :alt="`${album.name}封面`" loading="lazy" />
          </div>
          <div class="album-info">
            <h2>{{ album.name }}<em v-if="album.fixed">固定</em></h2>
            <p>{{ album.count }} 张 · {{ album.date }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
