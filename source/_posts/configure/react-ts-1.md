---
uuid: 3a26c314-2f0d-21b2-f54c-3cf9fee39e3e
title: React-ts
categories: 环境
date: 2022-01-24 22:13:00
---
配置 React + ts

# 搭建基础 react 项目 

```bash
$ npx create-react-app demo
```

# 安装依赖

```bash
$  yarn add @typescript-eslint/eslint-plugin --dev
$  yarn add @typescript-eslint/parser --dev
$  yarn add eslint --dev
$  yarn add eslint-config-alloy --dev
$  yarn add eslint-loader --dev
$  yarn add eslint-plugin-react --dev
$  yarn add eslint-plugin-prettier --dev
$  yarn add prettier --dev
$  yarn add husky --dev
$  yarn add lint-staged --dev
```

# 配置eslint 在项目根目录创建 .eslintrc.json 文件

1. 这个是我配置的，也可以在rules自行配置
2. [eslint 中文网](https://eslint.bootcss.com/docs/user-guide/configuring)

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": [
      "@typescript-eslint/eslint-plugin"
  ],
  "extends": [
      "alloy",
      "alloy/react",
      "alloy/typescript"
  ],
  "settings": {
      "react": {
          "version": "detect"
      }
  },
  "rules": {
    "no-console": "error",
    "max-len": ["error", 130],
    "max-lines": ["error", 500],
    "indent": ["error", 2],
    "max-depth": ["error", 3],
    "no-unused-vars": "error",
    "no-param-reassign": "error",
    "no-multiple-empty-lines": "error"
  }
}
```

# 配置 prettier 在根目录创建 .prettierrc.json 文件

1. 以下是我的配置，可自行配置
2. [prettier 文档](https://prettier.io/docs/en/api.html)

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 130,
  "overrides": [
    {
      "files": ".prettierrc",
      "options": { "parser": "json" }
    }
  ]
}
```
# 配置 husky

1. [husky 文档](https://typicode.github.io/husky/#/)
```bash
$ npx husky-init && yarn
$ npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

# 配置 package.json

```json
{
  "scripts": {
    "lint": "eslint --ext .ts,.tsx,.js,jsx",
    "lint_fix": "eslint --ext .ts,.tsx,.js,jsx --fix",
    "prepare": "husky install",
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
  "*.{js,jsx,ts,tsx,json,less,md}": [
    "eslint --fix",
    "git add"
  ],
  "*.{js,jsx,ts,tsx,less,json}": [
    "prettier --write"
  ]
},
}
```