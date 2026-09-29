<script setup lang="ts">
import { ref } from 'vue'
import { Check, Delete, ChatDotRound } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const tab = ref('待审核')
const comments = [
  { name: '小周', ip: '117.***.42.18', article: 'Vue 3 项目中的状态边界', content: '这篇很有帮助，能不能再补充一个大型项目的案例？', time: '今天 13:46' },
  { name: '匿名读者', ip: '39.***.128.7', article: '博客图片优化实践', content: 'WebP 的兼容性现在怎么样，是否还需要保留原图？', time: '今天 10:12' },
  { name: '星河', ip: '183.***.76.31', article: '毕业设计开发日志', content: '目录拆分得很清楚，期待后续更新。', time: '昨天 22:38' },
]
</script>

<template>
  <section class="panel content-panel"><div class="comment-toolbar"><div class="segmented"><button v-for="item in ['待审核','已通过','垃圾评论']" :key="item" :class="{active:tab===item}" @click="tab=item">{{ item }}<em v-if="item==='待审核'">4</em></button></div><el-input placeholder="搜索昵称、IP 或内容" style="max-width:280px" /></div><div class="review-list"><div v-for="item in comments" :key="item.time" class="review-item"><span class="comment-avatar">{{ item.name.slice(0,1) }}</span><div class="review-content"><div><strong>{{ item.name }}</strong><span>{{ item.ip }}</span><time>{{ item.time }}</time></div><p>{{ item.content }}</p><small>评论于《{{ item.article }}》</small></div><div class="review-actions"><el-button type="success" plain :icon="Check" @click="ElMessage.success('评论已通过')">通过</el-button><el-button :icon="ChatDotRound">回复</el-button><el-button type="danger" plain :icon="Delete">拒绝</el-button></div></div></div></section>
</template>
