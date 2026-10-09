<script setup lang="ts">
import { ref } from 'vue'
import { boardMessages } from '@/data/mock'
import { ChatDotRound } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import UserAvatar from '@/components/UserAvatar.vue'
import AvatarPicker from '@/components/AvatarPicker.vue'

const nickname = ref('')
const message = ref('')
const list = ref([...boardMessages])

function submit() {
  if (!nickname.value.trim() || !message.value.trim()) return ElMessage.warning('请填写昵称和留言内容')
  list.value.unshift({ id: Date.now(), name: nickname.value.trim(), date: '刚刚 · 待审核', text: message.value.trim() })
  message.value = ''
  ElMessage.success('留言已提交，审核后将公开显示')
}
</script>

<template>
  <div class="page-wrap container narrow-page">
    <header class="page-intro">
      <h1>留言板</h1>
      <p>随便说点什么，欢迎常来坐坐。</p>
    </header>

    <section class="comments-section">
      <div class="comments-heading">
        <div><h2>留言 <em>{{ list.length }}</em></h2></div>
        <span>无需登录 · 首次留言需审核</span>
      </div>

      <div class="comment-form">
        <el-input v-model="nickname" placeholder="你的昵称（必填）" /><AvatarPicker :name="nickname" />
        <el-input v-model="message" type="textarea" :rows="4" placeholder="友善交流，认真表达……" maxlength="500" show-word-limit />
        <div>
          <small>提交即表示同意本站的评论规则与隐私说明</small>
          <el-button type="primary" :icon="ChatDotRound" @click="submit">提交留言</el-button>
        </div>
      </div>

      <div class="comment-list">
        <div v-for="item in list" :key="item.id" class="comment-item">
          <UserAvatar :name="item.name" />
          <div>
            <p><strong>{{ item.name }}</strong><time>{{ item.date }}</time></p>
            <div>{{ item.text }}</div>
            <div v-if="item.reply" class="comment-reply"><UserAvatar name="liuyang" /><div>
              <p><strong>liuyang</strong><em>作者</em><time>{{ item.reply.date }}</time></p>
              <div>{{ item.reply.text }}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
