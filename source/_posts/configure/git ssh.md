---
uuid: 882ff266-ae23-910a-0a74-c80b3735d51a
uuid: 
title: git ssh-key
categories: 环境
date: 
---
配置git ssh

# 配置git ssh

### 1. 下载git

```bash
$ sudo apt install git
```

### 2. 设置git config

``` bash
$ git config --global user.name "xxx"
$ git config --global user.email "xxx@.com"
```

### 3. 生成key

1. 回车到底

``` bash
$ ssh-keygen -t rsa -C "xxx@.com"
```

### 4. 复制生成的 ssh-rsa,pub

1. 复制输出内容

``` bash
$ cat ~/.ssh/id_rsa.pub
```

### 5. 配置到git

1. Setting-》SSH and GPG keys -》SSh keys 
2. title 随便写 
3. ssh 就是刚才复制的 id_rsa.pub 内容

### 6. 问题

1. 没有权限
   - 检查email name 是否正确
2. 查看是否配置成功

``` bash
$ ssh -T git@github.com
# Hi user.name! You've successfully authenticated, but GitHub does #  not provide shell access.
```

3. 如果没有配置成功尝试一下

ssh-add命令是把专用密钥添加到ssh-agent的高速缓存中,从而提高ssh的认证速度

```bash
$ ssh-add ~/.ssh/id_rsa
```
