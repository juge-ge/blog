<script setup lang="ts">
import { ref, watch } from 'vue'
import { avatarFor, defaultAvatar } from '@/services/avatars'
const props = defineProps<{ name: string; src?: string }>()
const failed = ref(false)
watch(() => avatarFor(props.name, props.src), () => { failed.value = false })
</script>
<template>
  <img class="public-avatar" :src="failed ? defaultAvatar(name) : avatarFor(name, src)" :alt="`${name || '访客'}的头像`" width="42" height="42" @error="failed = true" />
</template>
<style scoped>
.public-avatar { display:block; width:42px; height:42px; flex:0 0 42px; border-radius:50%; object-fit:cover; background:var(--soft); border:1px solid var(--line); }
</style>
