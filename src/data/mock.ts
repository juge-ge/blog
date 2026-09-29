export type Article = {
  id: number
  title: string
  slug: string
  summary: string
  category: string
  tags: string[]
  date: string
  readTime: string
  views: number
  status: '已发布' | '草稿'
  featured?: boolean
  tone: string
  content: string
}

export const articles: Article[] = [
  {
    id: 1,
    title: '把复杂系统讲清楚：我的信息架构方法',
    slug: 'information-architecture',
    summary: '从页面层级、命名方式到交互反馈，整理一套能让产品保持清晰的信息架构方法。',
    category: '产品思考',
    tags: ['设计', '信息架构'],
    date: '2026-09-24',
    readTime: '8 分钟',
    views: 1286,
    status: '已发布',
    featured: true,
    tone: 'teal',
    content: `# 把复杂系统讲清楚\n\n好的信息架构不是把内容藏进更多层级，而是让读者始终知道自己在哪里、能去哪里。\n\n## 从用户任务开始\n\n在设计菜单前，先列出用户真正需要完成的任务。不要按照内部组织架构安排内容，而要按照用户的理解方式组织。\n\n> 清晰不是信息少，而是每一条信息都出现在恰当的位置。\n\n## 三个检查问题\n\n1. 用户能否在五秒内理解这个页面？\n2. 下一步操作是否足够明确？\n3. 返回上一级是否容易？\n\n\`\`\`ts\nconst clarity = structure + language + feedback\n\`\`\``,
  },
  {
    id: 2,
    title: 'Vue 3 项目中的状态边界应该放在哪里',
    slug: 'vue-state-boundary',
    summary: '什么时候使用组件状态，什么时候使用 Pinia，以及如何避免把所有数据都塞进全局状态。',
    category: '前端开发',
    tags: ['Vue', 'Pinia'],
    date: '2026-09-18',
    readTime: '6 分钟',
    views: 948,
    status: '已发布',
    tone: 'blue',
    content: '# Vue 3 项目中的状态边界\n\n状态离使用它的地方越近，代码通常越容易理解。只有多个页面共同依赖的数据，才需要进入 Pinia。',
  },
  {
    id: 3,
    title: '从一张大图到秒开：博客图片优化实践',
    slug: 'image-performance',
    summary: '通过尺寸裁剪、WebP、懒加载与缓存策略，让文章图片加载更快、页面更稳定。',
    category: '性能优化',
    tags: ['性能', '图片'],
    date: '2026-09-09',
    readTime: '10 分钟',
    views: 1672,
    status: '已发布',
    tone: 'orange',
    content: '# 从一张大图到秒开\n\n图片通常是博客页面中体积最大的资源。优化顺序应该是：正确尺寸、现代格式、懒加载、缓存和 CDN。',
  },
  {
    id: 4,
    title: '我的毕业设计开发日志：从需求到原型',
    slug: 'graduation-project-log',
    summary: '记录博客系统毕业设计第一阶段的需求分析、页面规划和技术选择。',
    category: '开发日志',
    tags: ['毕业设计', '记录'],
    date: '2026-08-30',
    readTime: '5 分钟',
    views: 615,
    status: '已发布',
    tone: 'purple',
    content: '# 我的毕业设计开发日志\n\n第一阶段最重要的不是立刻开始写代码，而是确认项目要解决哪些问题。',
  },
]

export const links = [
  { name: '前端拾光', url: 'https://example.com', desc: '记录前端工程与用户体验', initials: 'FE', color: '#2e7dff' },
  { name: '代码与茶', url: 'https://example.com', desc: '后端、架构与慢生活', initials: 'CT', color: '#18a999' },
  { name: '像素花园', url: 'https://example.com', desc: '产品设计与独立开发', initials: 'PX', color: '#8b5cf6' },
]
