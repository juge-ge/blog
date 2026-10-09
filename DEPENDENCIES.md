# 博客项目依赖与运行说明

## 1. 当前项目范围

项目为 Vue 3 + TypeScript 博客前端原型，包含公开展示界面和管理界面。前台包括首页、文章、相册、留言板、友链，支持响应式布局和图片头像。

**目前不是已完成的全栈系统**：文章及统计主要使用 mock 数据；评论、照片上传、头像设置与管理登录仍为内存或浏览器本地演示。管理员 token 在客户端生成，不具备真实认证能力。NestJS、PostgreSQL、Redis、Prisma、服务端上传及访问统计尚未实现，不能当作生产安全系统直接部署。

## 2. 运行环境

- Node.js：Vite 7 要求 Node 20.19+ 或 22.12+；建议 Node 22.22.2。
- pnpm：使用支持 lockfileVersion 9.0 的版本；仓库尚未通过 packageManager 字段固定 pnpm 版本。
- Git：用于版本管理及 GitHub 上传。
- 本地开发不需要数据库或 Redis。

`package.json` 中的版本范围与锁文件解析版本不同：`^` 允许兼容范围升级，`~` 允许补丁升级。下表锁定版本来自当前 pnpm-lock.yaml，不等同于对本机 node_modules 的版本盘点。

## 3. 生产依赖

| 库 | package.json 范围 | 锁文件版本 | 用途 |
| --- | --- | --- | --- |
| vue | ^3.5.22 | 3.5.43 | 组件与响应式界面 |
| vue-router | ^4.6.3 | 4.6.4 | 展示端及管理端路由 |
| pinia | ^3.0.3 | 3.0.4 | 主题、登录演示等状态管理 |
| element-plus | ^2.11.4 | 2.14.6 | 表单、消息及管理界面组件 |
| @element-plus/icons-vue | ^2.3.2 | 2.3.2 | Vue 图标组件 |
| axios | ^1.12.2 | 1.20.0 | HTTP 请求封装；正式接口尚未接入 |
| md-editor-v3 | ^6.3.1 | 6.5.6 | Markdown 编辑和预览 |

## 4. 开发依赖

| 库 | package.json 范围 | 锁文件版本 | 用途 |
| --- | --- | --- | --- |
| vite | ^7.1.7 | 7.3.6 | 开发服务和生产打包 |
| @vitejs/plugin-vue | ^6.0.1 | 6.0.9 | Vite 的 Vue 单文件组件支持 |
| typescript | ~5.9.3 | 5.9.3 | TypeScript 编译与类型系统 |
| vue-tsc | ^3.1.1 | 3.3.11 | Vue/TypeScript 类型检查 |

传递依赖及完整性校验以 pnpm-lock.yaml 为准，不建议手动逐项安装。pnpm-workspace.yaml 允许 esbuild 的构建脚本。

## 5. 安装与运行

在已安装 Node 和 pnpm 的终端中进入项目根目录：

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

- `dev`：Vite 开发服务，监听 0.0.0.0；端口以启动输出为准。
- `build`：执行 `vue-tsc -b && vite build`，产物为 dist/。
- `preview`：仅本地预览构建结果，不是正式生产服务器。
- 国内网络需要时可使用 `pnpm install --frozen-lockfile --registry=https://registry.npmmirror.com`，不要关闭 TLS 验证。
- 推荐继续用 pnpm，避免 npm/pnpm 混用和多套锁文件。

本机目前没有终端可直接调用的 Node/npm；WorkBuddy 受管 Node 位于：

```text
/Users/jushifu/.workbuddy/binaries/node/versions/22.22.2/bin/node
/Users/jushifu/.workbuddy/binaries/node/versions/22.22.2/bin/npm
```

上述为本机专用位置，其他机器应自行安装符合版本要求的 Node 与 pnpm。若只验证本机已经安装的依赖，可将受管 Node 目录加入当前命令的 PATH 后运行 npm run build，无需重新安装或生成 npm 锁文件。

## 6. 目录与构建注意事项

- `index.html`：Vite HTML 入口，加载 src/main.ts。
- `src/views/public`：公开展示页面。
- `src/views/admin`：管理页面原型。
- `src/components`：头像等共享组件。
- `src/data/mock.ts`：演示数据。
- `src/services`：HTTP 与头像本地存储逻辑。
- `public`：随构建复制的图片、图标、默认头像。
- `tsconfig.app.json` 使用 noEmit，避免将编译 JS 写回源码目录。
- Vite 配置优先解析 TypeScript；不要重新生成同名 src/*.js 或 *.vue.js 残留。
- 生产使用静态服务器时，应为 Vue Router history 模式配置 SPA 回退到 index.html。
- 前台视觉设计未因整理上传而改动。

## 7. 公开仓库与安全

不提交 node_modules/、dist/、临时缓存、server-samples/、.env、私钥、服务器密码或真实访问日志。忽略规则只能防止未跟踪文件新增，已进入 Git 历史的敏感内容必须单独处理。

公开仓库前需审核全部将推送的历史，而不是只检查当前文件。原型管理登录不提供任何生产安全保证。真实后端应服务端认证、校验上传、审核匿名评论并对访问统计进行隐私化处理。
