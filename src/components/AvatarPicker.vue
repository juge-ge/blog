<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import UserAvatar from './UserAvatar.vue'
import { avatarLibrary, saveAvatar } from '@/services/avatars'
const props = defineProps<{ name: string }>()
const input = ref<HTMLInputElement>()
const open = ref(false)
function set(url: string) {
  if (!props.name.trim()) return ElMessage.warning('请先填写昵称')
  try { saveAvatar(props.name, url); open.value = false } catch { ElMessage.error('浏览器无法保存头像，请检查存储空间或权限') }
}
async function upload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  target.value = ''
  if (!file) return
  if (!props.name.trim()) return ElMessage.warning('请先填写昵称')
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) return ElMessage.warning('请选择 5MB 以内的 JPG、PNG 或 WebP 图片')
  const url = URL.createObjectURL(file)
  try {
    const image = new Image()
    image.src = url
    await image.decode()
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 128
    const side = Math.min(image.width, image.height)
    canvas.getContext('2d')!.drawImage(image, (image.width-side)/2, (image.height-side)/2, side, side, 0, 0, 128, 128)
    set(canvas.toDataURL('image/jpeg', 0.85))
  } catch { ElMessage.error('图片无法读取，请更换图片') } finally { URL.revokeObjectURL(url) }
}
</script>
<template>
  <div class="avatar-choice">
    <div class="avatar-choice-line"><UserAvatar :name="name" /><button type="button" @click="open = !open">更换头像</button><small>可选，未设置时自动分配</small></div>
    <div v-if="open" class="avatar-choice-options">
      <button v-for="url in avatarLibrary" :key="url" type="button" :aria-label="`选择${url.split('/').pop()}头像`" @click="set(url)"><img :src="url" alt="头像库选项" /></button>
      <button type="button" @click="input?.click()">上传图片</button>
      <button type="button" @click="set('')">自动分配</button>
      <small>仅在本浏览器保存，不会上传服务器。</small>
    </div>
    <input ref="input" type="file" accept="image/png,image/jpeg,image/webp" hidden @change="upload" />
  </div>
</template>
<style scoped>
.avatar-choice-line {display:flex;align-items:center;gap:12px;flex-wrap:wrap;}
.avatar-choice button {border:0;background:none;color:var(--muted);padding:5px; font-size:12px;}
.avatar-choice button:hover {color:var(--ink);}
.avatar-choice small {font-size:11px;color:var(--muted);}
.avatar-choice-options {display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:12px;}
.avatar-choice-options img {display:block;width:36px;height:36px;border-radius:50%;}
</style>
