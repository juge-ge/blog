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
  cover?: string
  content: string
}

export const articles: Article[] = [
  {
    id: 1,
    title: '2025：信息量极大的一年',
    slug: 'year-2025',
    summary: '用文字和照片记录毕业、跨专业读研、技术学习与生活变化，为这一年画上句号。',
    category: '年度总结',
    tags: ['年度总结', '碎碎念'],
    date: '2025-12-31',
    readTime: '18 分钟',
    views: 1683,
    status: '已发布',
    featured: true,
    tone: 'teal',
    content: `# 2025：信息量极大的一年\n\n**2025 年，是我第一次真切感受到时间以肉眼可见的形式在流逝。**不知为何，一切都过得飞快。转念一想，如今改变世界的 DeepSeek 竟然也是这一年的产物，便觉释然。\n\n我一直认为，单纯的文字记录很难直观地将思绪拉回旧时光，所以决定用图片来定格这一年。这篇博客不仅是给自己的 2025 划上句号，也是想给那些由于多种原因联系越来越少的朋友们看看我的近况。\n\n## 跨入计算机的大门\n\n这一年里，我算是真正跨进了计算机的大门。我记得第一个部署成功的产品是 Whisper，看到它跑通的那一刻，内心的成就感无以复写。\n\n> 三分做，七分改。不要幻想一次性解决所有问题，关键在于坚持。\n\n本文内容来自服务器上原有博客，当前仅展示节选。`,
  },
  {
    id: 2,
    title: '电解水实验操作细则',
    slug: 'electrolysis-guide',
    summary: '从实验前准备、泡沫镍清洗到三电极体系测试，整理电解水实验的完整操作过程。',
    category: '实验记录',
    tags: ['电解水', '化工实验'],
    date: '2025-07-06',
    readTime: '22 分钟',
    views: 1256,
    status: '已发布',
    tone: 'blue',
    cover: '/server-images/electrolysis.jpg',
    content: '# 电解水实验操作细则\n\n本篇文章源于实验室同门的手把手教学，以及实践过程中的整理与汇总。\n\n## 实验前补充知识\n\n该研究方向主要涉及电解水制氢，主要反应为 HER（析氢反应）和 OER（析氧反应）。在实际电解过程中，需要通过催化剂降低反应的过电位。\n\n## 三电极体系\n\n测试使用工作电极、对电极和参比电极。接线时需按照仪器要求分别连接，并确保参比电极保持正确位置。\n\n本文内容来自服务器上原有博客，当前仅展示节选。',
  },
  {
    id: 3,
    title: '本地部署私人化大模型',
    slug: 'minimind-local-model',
    summary: '以 MiniMind 为例，记录预训练、SFT、LoRA 和知识蒸馏等完整的大模型训练流程。',
    category: 'AI 实战',
    tags: ['MiniMind', '模型训练'],
    date: '2024-03-18',
    readTime: '16 分钟',
    views: 2318,
    status: '已发布',
    tone: 'orange',
    cover: '/server-images/minimind.png',
    content: '# 本地部署私人化大模型\n\n本项目基于 MiniMind 开源项目，以 MiniMind 模型为例进行微调。\n\n## MiniMind 介绍\n\nMiniMind 系列极其轻量，目标是让普通个人 GPU 也能快速训练。项目包含数据集清洗、预训练、监督微调、LoRA、DPO 与知识蒸馏等过程。\n\n## LoRA\n\nLoRA 是一种参数高效微调方法，只需要更新少量参数，同时尽量保留原始模型能力，适合私人知识模型定制。\n\n本文内容来自服务器上原有博客，当前仅展示节选。',
  },
  {
    id: 4,
    title: '说话人分离并转录实战',
    slug: 'speaker-diarization',
    summary: '基于 FunASR 实现多人对话的说话人分离、语音转写，并使用 FastAPI 部署为可访问服务。',
    category: 'AI 实战',
    tags: ['语音识别', 'FastAPI'],
    date: '2024-02-27',
    readTime: '12 分钟',
    views: 1894,
    status: '已发布',
    tone: 'purple',
    cover: '/server-images/speaker.jpg',
    content: '# 说话人分离并转录实战\n\n本项目基于 FunASR 开源项目制作，用于实现多人对话场景中的音频分离和语音转写。\n\n## 部署前准备\n\n服务器需要准备 Python 环境、模型文件和必要的运行空间。如果使用 GPU 加速，还需要配置相应的 CUDA 环境。\n\n## 前端交互\n\n应用增加了音频文件选择、批量上传和转录结果下载功能，通过 FastAPI 提供服务端接口。\n\n本文内容来自服务器上原有博客，当前仅展示节选。',
  },
]

export const links = [
  { name: '前端拾光', url: 'https://example.com', desc: '记录前端工程与用户体验', initials: 'FE', color: '#2e7dff' },
  { name: '代码与茶', url: 'https://example.com', desc: '后端、架构与慢生活', initials: 'CT', color: '#18a999' },
  { name: '像素花园', url: 'https://example.com', desc: '产品设计与独立开发', initials: 'PX', color: '#8b5cf6' },
]
