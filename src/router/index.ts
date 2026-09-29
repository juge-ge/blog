import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: PublicLayout,
      children: [
        { path: '', component: () => import('@/views/public/HomeView.vue'), meta: { title: '远光笔记' } },
        { path: 'archive', component: () => import('@/views/public/ArchiveView.vue'), meta: { title: '文章归档' } },
        { path: 'article/:slug', component: () => import('@/views/public/ArticleView.vue'), meta: { title: '文章详情' } },
        { path: 'links', component: () => import('@/views/public/LinksView.vue'), meta: { title: '友情链接' } },
        { path: 'about', component: () => import('@/views/public/AboutView.vue'), meta: { title: '关于我' } },
      ],
    },
    {
      path: '/admin',
      component: AdminLayout,
      meta: { admin: true },
      children: [
        { path: '', redirect: '/admin/dashboard' },
        { path: 'dashboard', component: () => import('@/views/admin/DashboardView.vue'), meta: { title: '数据概览' } },
        { path: 'articles', component: () => import('@/views/admin/ArticlesView.vue'), meta: { title: '文章管理' } },
        { path: 'editor', component: () => import('@/views/admin/EditorView.vue'), meta: { title: '写文章' } },
        { path: 'comments', component: () => import('@/views/admin/CommentsView.vue'), meta: { title: '评论管理' } },
        { path: 'links', component: () => import('@/views/admin/LinksAdminView.vue'), meta: { title: '友链管理' } },
        { path: 'preview', component: () => import('@/views/admin/PreviewView.vue'), meta: { title: '全站预览' } },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach((to) => {
  document.title = `${String(to.meta.title || '远光笔记')} · 博客原型`
})

export default router
