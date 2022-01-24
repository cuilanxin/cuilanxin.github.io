---
uuid: e3eb464a-eb65-831d-b4f0-21b1be8594bd
title: TypeScript type interface区别
categories: 笔记
date: 2021-12-18 22:13:00
---
TypeScript type interface区别

# typescript type & interface区别

### 官网引文
> Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
>
> 百度翻译: 类型别名和接口非常相似，在许多情况下，您可以在它们之间自由选择。接口的几乎所有功能都可以在类型中使用，关键区别在于类型无法重新打开以添加新属性，而接口始终是可扩展的。

### 使用

```ts
interface A {
  name: string;
}

const a: A = { name: 'string' }
```

```ts
type A = {
  name: string;
}

const a: A = { name: 'string' }

type B = number

const b: B = 1;
```

**<code style='color: red; opacity: .8'>interface</code> **

