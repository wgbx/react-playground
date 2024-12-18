```markdown
# React 项目文档

## 开发指南

### 环境要求
- Node.js >= 18.18.0
- pnpm

### 安装依赖
```
pnpm install
```

### 开发服务
```bash
pnpm dev
```

### 构建
```bash
pnpm build
```

## 配置说明

### TypeScript 配置
项目使用严格的 TypeScript 配置，包括：
- 严格模式启用
- 模块解析使用 bundler 模式
- 支持路径别名 (@/* -> ./src/*)

### ESLint 配置
使用了 @antfu/eslint-config 配置，支持：
- React 相关规则
- TypeScript 类型检查
- 代码格式化
