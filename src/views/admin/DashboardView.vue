<script setup lang="ts">
import { TrendCharts, User, View, Timer, Document, TopRight } from '@element-plus/icons-vue'

const stats = [
  { label: '今日访问', value: '1,286', change: '+18.2%', icon: View, tone: 'blue' },
  { label: '独立访客', value: '842', change: '+12.6%', icon: User, tone: 'teal' },
  { label: '平均停留', value: '04:36', change: '+8.4%', icon: Timer, tone: 'purple' },
  { label: '已发布文章', value: '42', change: '本月 +5', icon: Document, tone: 'orange' },
]
const traffic = [36, 48, 42, 58, 52, 69, 64, 78, 72, 88, 82, 94]
const recentVisitors = [
  { ip: '117.***.42.18', area: '上海', device: 'iPhone · Safari', page: '图片优化实践', time: '2 分 18 秒' },
  { ip: '220.***.18.96', area: '广东', device: 'Windows · Edge', page: 'Vue 状态边界', time: '6 分 42 秒' },
  { ip: '39.***.128.7', area: '北京', device: 'Mac · Chrome', page: '博客首页', time: '1 分 09 秒' },
  { ip: '183.***.76.31', area: '浙江', device: 'Android · WeChat', page: '毕业设计日志', time: '4 分 26 秒' },
]
</script>

<template>
  <div class="dashboard-view">
    <div class="stat-grid"><div v-for="item in stats" :key="item.label" class="stat-card"><div class="stat-icon" :class="item.tone"><component :is="item.icon" /></div><div><span>{{ item.label }}</span><strong>{{ item.value }}</strong><small><TrendCharts />{{ item.change }}</small></div></div></div>
    <div class="dashboard-grid">
      <section class="panel traffic-panel"><div class="panel-heading"><div><h2>访问趋势</h2><p>最近 12 天页面访问量</p></div><el-select model-value="近 30 天" size="small"><el-option label="近 7 天" value="近 7 天" /><el-option label="近 30 天" value="近 30 天" /></el-select></div><div class="chart-summary"><strong>18,624</strong><span>总访问量</span><em>较上期 +14.8%</em></div><div class="line-chart"><div class="chart-grid-lines"><i></i><i></i><i></i><i></i></div><svg viewBox="0 0 600 180" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2e7dff" stop-opacity=".28"/><stop offset="1" stop-color="#2e7dff" stop-opacity="0"/></linearGradient></defs><path d="M0 150 L55 132 L109 141 L164 112 L218 124 L273 88 L327 98 L382 61 L436 72 L491 35 L545 48 L600 18 L600 180 L0 180Z" fill="url(#area)"/><polyline points="0,150 55,132 109,141 164,112 218,124 273,88 327,98 382,61 436,72 491,35 545,48 600,18" fill="none" stroke="#2e7dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><div class="chart-labels"><span>09/18</span><span>09/21</span><span>09/24</span><span>09/27</span><span>今天</span></div></div></section>
      <section class="panel source-panel"><div class="panel-heading"><div><h2>访问设备</h2><p>今日访客设备分布</p></div></div><div class="donut-wrap"><div class="donut"><span><strong>842</strong>UV</span></div><ul><li><i style="background:#2e7dff"></i><span>移动端</span><strong>58%</strong></li><li><i style="background:#18b6a4"></i><span>桌面端</span><strong>36%</strong></li><li><i style="background:#f3a83b"></i><span>平板</span><strong>6%</strong></li></ul></div></section>
    </div>
    <section class="panel"><div class="panel-heading"><div><h2>实时访问</h2><p>IP 已脱敏，仅用于访问分析</p></div><button class="plain-link">查看完整记录 <TopRight /></button></div><div class="visitor-table"><div class="visitor-row table-head"><span>访问者</span><span>设备</span><span>访问页面</span><span>停留时间</span></div><div v-for="visitor in recentVisitors" :key="visitor.ip" class="visitor-row"><span><b>{{ visitor.ip }}</b><small>{{ visitor.area }}</small></span><span>{{ visitor.device }}</span><span>{{ visitor.page }}</span><span><i class="live-dot"></i>{{ visitor.time }}</span></div></div></section>
  </div>
</template>
