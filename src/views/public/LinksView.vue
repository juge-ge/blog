<script setup lang="ts">
import { ref } from 'vue'
import { links } from '@/data/mock'
import { TopRight, ChatDotRound } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import UserAvatar from '@/components/UserAvatar.vue'
import AvatarPicker from '@/components/AvatarPicker.vue'

const nickname = ref('')
const comment = ref('')
const comments = ref([
  { name: '山间飞鸟', time: '2026-09-20', content: '大佬换友链吗？站点「山间的风」，主要写徒步和胶片摄影，地址稍后私你。', reply: { text: '看了下内容很对味，加上了。', date: '2026-09-21' } },
  { name: '像素花园', time: '2026-08-05', content: '友链已互挂，期待你的设计系列更新。' },
])

function domainOf(url: string) {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

function submitComment() {
  if (!nickname.value.trim() || !comment.value.trim()) return ElMessage.warning('请填写昵称和评论内容')
  comments.value.push({ name: nickname.value.trim(), time: '刚刚 · 待审核', content: comment.value.trim() })
  comment.value = ''
  ElMessage.success('评论已提交，审核后将公开显示')
}
</script>

<template>
  <div class="container page-wrap narrow-page">
    <header class="page-intro">
      <h1>友情链接</h1>
      <p>一些持续输出、值得常去看看的个人站点。</p>
    </header>

    <div class="links-list">
      <a v-for="item in links" :key="item.name" :href="item.url" target="_blank" rel="noopener noreferrer" class="link-row">
        <div class="link-row-main"><UserAvatar :name="item.name" /><div>
          <h2>{{ item.name }}<TopRight /></h2>
          <p>{{ item.desc }}</p></div>
        </div>
        <span class="link-row-domain">{{ domainOf(item.url) }}</span>
      </a>
    </div>

    <details class="friend-avatar-settings"><summary>自定义友链头像（本地预览）</summary><div v-for="item in links" :key="item.name"><span>{{ item.name }}</span><AvatarPicker :name="item.name" /></div></details>
    <p class="links-note">如果你也在认真写作，想交换友链的话，直接在下方留言，注明站点名称和地址即可。</p>

    <section class="comments-section links-comments">
      <div class="comments-heading">
        <div><h2>评论 <em>{{ comments.length }}</em></h2></div>
        <span>无需登录 · 首次评论需审核</span>
      </div>

      <div class="comment-form">
        <el-input v-model="nickname" placeholder="你的昵称（必填）" /><AvatarPicker :name="nickname" />
        <el-input v-model="comment" type="textarea" :rows="4" placeholder="想换友链的话，记得留下站点名称和地址……" maxlength="500" show-word-limit />
        <div>
          <small>提交即表示同意本站的评论规则与隐私说明</small>
          <el-button type="primary" :icon="ChatDotRound" @click="submitComment">提交评论</el-button>
        </div>
      </div>

      <div class="comment-list">
        <div v-for="item in comments" :key="item.name + item.time" class="comment-item">
          <UserAvatar :name="item.name" />
          <div>
            <p><strong>{{ item.name }}</strong><time>{{ item.time }}</time></p>
            <div>{{ item.content }}</div>
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
