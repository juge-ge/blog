import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const ADMIN_TOKEN_KEY = 'blog_admin_token'
const VISITOR_KEY = 'blog_visitor_entered'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/login',
      name: 'public-entry',
      component: () => import('@/views/public/EntryView.vue'),
      meta: { title: '欢迎', entry: true },
    },
    {
      path: '/',
      component: PublicLayout,
      children: [
        { path: '', component: () => import('@/views/public/HomeView.vue'), meta: { title: '首页' } },
        { path: 'archive', component: () => import('@/views/public/ArchiveView.vue'), meta: { title: '文章归档' } },
        { path: 'article/:slug', component: () => import('@/views/public/ArticleView.vue'), meta: { title: '文章详情' } },
        { path: 'links', component: () => import('@/views/public/LinksView.vue'), meta: { title: '友情链接' } },
        { path: 'album', component: () => import('@/views/public/AlbumView.vue'), meta: { title: '相册' } },
        { path: 'board', component: () => import('@/views/public/BoardView.vue'), meta: { title: '留言板' } },
        { path: 'about', component: () => import('@/views/public/AboutView.vue'), meta: { title: '关于我' } },
      ],
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('@/views/admin/AdminLoginView.vue'),
      meta: { title: '管理平台登录' },
    },
    {
      path: '/admin',
      component: AdminLayout,
      meta: { admin: true, requiresAuth: true },
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

router.beforeEach((to) => {
  const isAdminArea = to.path.startsWith('/admin')
  const hasToken = Boolean(localStorage.getItem(ADMIN_TOKEN_KEY))

  if (isAdminArea && to.path !== '/admin/login' && !hasToken) {
    return { path: '/admin/login', query: { redirect: to.fullPath } }
  }

  if (to.path === '/admin/login' && hasToken) {
    return { path: '/admin/dashboard' }
  }

  const enteredPublic = sessionStorage.getItem(VISITOR_KEY) === '1'
  if (!isAdminArea && !to.meta.entry && !enteredPublic && !hasToken) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  return true
})

router.afterEach((to) => {
  document.title = String(to.meta.title || '首页')
})

export default router
