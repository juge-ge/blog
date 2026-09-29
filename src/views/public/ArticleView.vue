<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { MdPreview } from 'md-editor-v3'
import { articles } from '@/data/mock'
import { Timer, View, ChatDotRound, CopyDocument } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const route = useRoute()
const article = computed(() => articles.find(item => item.slug === route.params.slug) || articles[0])
const nickname = ref('')
const comment = ref('')
const comments = ref([
  { name: '一位路过的读者', time: '2 天前', content: '“状态离使用它的地方越近”这句话很有启发，期待后续的项目案例。' },
  { name: '站长回复', time: '1 天前', content: '谢谢！下一篇会结合这个博客的 Pinia 模块来展开。', admin: true },
])

function submitComment() {
  if (!nickname.value.trim() || !comment.value.trim()) return ElMessage.warning('请填写昵称和评论内容')
  comments.value.push({ name: nickname.value, time: '刚刚 · 待审核', content: comment.value })
  comment.value = ''
  ElMessage.success('评论已提交，审核后将公开显示')
}

function copyLink() {
  navigator.clipboard?.writeText(location.href)
  ElMessage.success('文章链接已复制')
}
</script>

<template>
  <div class="article-page">
    <div class="container article-header">
      <RouterLink to="/archive" class="back-link">文章归档 / {{ article.category }}</RouterLink>
      <h1>{{ article.title }}</h1>
      <p>{{ article.summary }}</p>
      <div class="article-byline"><span class="mini-avatar">刘</span><span><strong>Liu Yang</strong><small>{{ article.date }} 发布</small></span><i></i><span><Timer />{{ article.readTime }}</span><span><View />{{ article.views }} 次阅读</span><button @click="copyLink"><CopyDocument />复制链接</button></div>
    </div>
    <div class="reading-progress"><i></i></div>
    <div class="container article-layout">
      <article class="article-body"><MdPreview :model-value="article.content" /></article>
      <aside class="article-toc"><span>本文目录</span><a href="#">从用户任务开始</a><a href="#">三个检查问题</a><a href="#">最后的判断</a><div class="toc-divider"></div><span>文章标签</span><div class="tag-row"><b v-for="tag in article.tags" :key="tag"># {{ tag }}</b></div></aside>
    </div>
    <section class="container comments-section">
      <div class="comments-heading"><div><span class="section-kicker">DISCUSSION</span><h2>评论 <em>{{ comments.length }}</em></h2></div><span>无需登录 · 首次评论需审核</span></div>
      <div class="comment-form"><el-input v-model="nickname" placeholder="你的昵称（必填）" /><el-input v-model="comment" type="textarea" :rows="4" placeholder="友善交流，认真表达……" maxlength="500" show-word-limit /><div><small>提交即表示同意本站的评论规则与隐私说明</small><el-button type="primary" :icon="ChatDotRound" @click="submitComment">提交评论</el-button></div></div>
      <div class="comment-list"><div v-for="item in comments" :key="item.name + item.time" class="comment-item" :class="{ admin: item.admin }"><span class="comment-avatar">{{ item.name.slice(0, 1) }}</span><div><p><strong>{{ item.name }}</strong><em v-if="item.admin">作者</em><time>{{ item.time }}</time></p><div>{{ item.content }}</div></div></div></div>
    </section>
  </div>
</template>
