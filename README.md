# Blog · 博客前端原型

基于 **Vue 3 + TypeScript + Vite** 的响应式博客，包含公开展示端和管理端原型，支持桌面及手机布局。

> 当前是前端演示项目，不是完整的生产级全栈博客。无需数据库即可运行；真实登录鉴权、持久化评论、服务器图片上传和访问统计尚未实现。

## 1. 需要下载什么？

先安装以下工具：

- **Node.js**：推荐 **22.22.2**，下载地址：<https://nodejs.org/>。Vite 7 要求 Node 20.19+ 或 22.12+，Node 18 不适用。Node 安装包通常包含 npm。
- **Git**：用于克隆仓库，下载地址：<https://git-scm.com/downloads>；也可以在 GitHub 点击 Code → Download ZIP 后解压。
- **pnpm 10**：项目有 `pnpm-lock.yaml`，推荐使用 pnpm 安装依赖。下面提供不需要全局安装 pnpm 的运行方式。

**不需要 Python、requirements.txt、MySQL、PostgreSQL 或 Redis。** 本项目的依赖清单是 `package.json`，锁定版本及传递依赖记录在 `pnpm-lock.yaml`，不用手动逐个下载包。

安装 Node 后重新打开终端，检查：

```sh
node --version
npm --version
git --version
```

## 2. 快速开始

### 克隆代码

公开仓库可以通过 HTTPS 克隆，不需要配置 SSH：

```sh
git clone https://github.com/juge-ge/blog.git
cd blog
```

如果下载的是 ZIP，请在解压后的项目根目录打开终端，即包含 `package.json` 的目录。

### 一次性安装所有依赖

```sh
npx --yes pnpm@10 install --frozen-lockfile
```

此命令会按锁文件安装生产依赖和构建所需开发依赖，并生成本地 `node_modules`。第一次执行需要联网下载 pnpm 和依赖；不要使用 `--prod`，否则缺少 Vite/TypeScript，无法构建。

如果网络访问默认仓库失败，可使用镜像：

```sh
npm exec --yes --registry=https://registry.npmmirror.com --package=pnpm@10 -- pnpm install --frozen-lockfile --registry=https://registry.npmmirror.com
```

不要关闭 SSL/TLS 验证，也不要删除锁文件来绕过安装错误。推荐始终使用 pnpm，避免与 `npm install` 混用造成多套锁文件。

### 启动开发服务

```sh
npx --yes pnpm@10 dev
```

通常访问 **http://localhost:5173**；若端口被占用，以终端打印的 Local 地址为准。服务启动后保持终端运行，按 `Ctrl+C` 停止。

指定端口：

```sh
npx --yes pnpm@10 dev --port 8088
```

脚本监听 `0.0.0.0`，同一局域网的手机可以访问 `http://电脑局域网IP:端口`，需要系统防火墙允许访问。只在可信网络使用开发服务。

如果已经安装 pnpm 10，也可以直接执行 `pnpm install --frozen-lockfile`、`pnpm dev` 等命令。

## 3. 如何访问页面？

| 页面 | 路径 |
| --- | --- |
| 首页 | `/` |
| 文章列表 | `/archive` |
| 文章详情 | `/article/:slug`，从首页文章卡片进入 |
| 相册 | `/album` |
| 留言板 | `/board` |
| 友链 | `/links` |
| 管理登录 | `/admin/login` |
| 管理概览 | `/admin/dashboard` |

第一次打开公开页面可能跳转到 `/login`，这是演示版欢迎入口，不需要注册账号。通过页面入口进入博客即可。

**管理登录仅为演示**：填写非空用户名和密码即可进入，未验证真实账号，token 由浏览器生成。切勿使用真实密码，也不能把这一机制当作正式网站访问控制。

## 4. 构建与预览

先停止开发服务，或另开一个终端并进入项目目录：

```sh
npx --yes pnpm@10 build
npx --yes pnpm@10 preview
```

- `build` 执行 `vue-tsc -b && vite build`，先类型检查，再打包到 `dist/`。
- `preview` 通常运行在 **http://localhost:4173**，实际地址以终端输出为准。
- `preview` 仅用于检查构建结果，不是正式生产服务器。
- 不要双击 `dist/index.html` 通过 `file://` 打开，应通过 HTTP 静态服务访问。

正式静态部署需把 `dist/` 内容交给 Nginx 等服务器，并为 Vue Router history 模式配置回退，例如站点中使用 `try_files $uri $uri/ /index.html;`。本 README 不会自动修改或部署任何服务器。

## 5. 具体依赖包

下表为 `package.json` 声明范围；安装时实际锁定版本以 `pnpm-lock.yaml` 为准。

### 应用依赖

| 包 | 版本范围 | 用途 |
| --- | --- | --- |
| `vue` | `^3.5.22` | Vue 组件与响应式系统 |
| `vue-router` | `^4.6.3` | 前台与后台路由 |
| `pinia` | `^3.0.3` | 应用状态管理 |
| `element-plus` | `^2.11.4` | UI 组件库 |
| `@element-plus/icons-vue` | `^2.3.2` | 图标组件 |
| `axios` | `^1.12.2` | HTTP 请求封装 |
| `md-editor-v3` | `^6.3.1` | Markdown 编辑与展示 |

### 开发及构建依赖

| 包 | 版本范围 | 用途 |
| --- | --- | --- |
| `vite` | `^7.1.7` | 开发服务器与生产打包 |
| `@vitejs/plugin-vue` | `^6.0.1` | 编译 Vue 单文件组件 |
| `typescript` | `~5.9.3` | TypeScript 类型系统 |
| `vue-tsc` | `^3.1.1` | Vue/TypeScript 类型检查 |

安装命令会自动安装上述全部包及其传递依赖，无需逐个执行 `npm install`。详细锁定版本和说明见 [DEPENDENCIES.md](./DEPENDENCIES.md)。

## 6. 项目结构

```text
blog/
├── index.html             # HTML 入口
├── package.json           # 依赖及运行脚本
├── pnpm-lock.yaml         # 依赖锁文件
├── pnpm-workspace.yaml    # 包构建脚本配置
├── public/                # 图片、图标、默认头像
├── src/
│   ├── components/        # 公共头像等组件
│   ├── data/mock.ts       # 演示内容与统计数据
│   ├── layouts/           # 展示端与管理端布局
│   ├── router/            # 路由与演示访问控制
│   ├── services/          # HTTP 和头像本地存储
│   ├── stores/            # Pinia 状态
│   ├── views/public/      # 博客展示页面
│   ├── views/admin/       # 管理端页面
│   └── styles.css         # 全局样式
└── DEPENDENCIES.md         # 详细依赖说明
```

## 7. 当前功能与限制

- 已有：首页、文章展示、相册、留言板、友链、Markdown 编辑界面、响应式布局及默认头像库。
- 文章及统计主要来自 mock 数据，管理端操作不能视为已接入正式发布流程。
- 头像自定义使用浏览器本地存储；访客照片和评论部分仅保存在页面内存中，刷新可能丢失，不会上传服务器。
- 尚无服务端身份认证、数据库、真实评论审核/回复、上传接口或用户访问采集。
- 当前运行不需要 `.env` 或真实服务凭据；不要提交密码、令牌或私钥。

## 8. 常见问题

**`node` / `npm` command not found**：先安装符合要求的 Node 并重开终端。本项目维护者的 Mac 目前使用 WorkBuddy 受管 Node，并未安装终端全局 Node；其他使用者请按本文安装，不要照搬维护者机器的绝对路径。

**Node 版本不兼容**：升级到 Node 22.12+，建议 22.22.2，再安装依赖。

**依赖安装失败**：确认网络、Node 版本及当前目录，必要时使用上面的镜像命令。

**端口被占用**：指定其他端口或使用终端输出的新端口。

**刷新文章或后台页面返回 404**：静态服务器缺少 SPA 回退，需要回退到 `index.html`。

**构建提示 chunk 超过 500kB**：这是体积优化警告，不一定表示构建失败；后续可优化代码拆分及编辑器依赖加载。
