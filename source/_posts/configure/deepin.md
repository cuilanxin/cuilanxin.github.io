---
uuid: d305ec04-dbdc-fd95-f7ce-1dafac12d084
title: deepin 开发环境
categories: 环境
date: 
---

# 安装环境

### 1. 安装git

```bash
$ sudo apt install git
```

### 2. 安装chrome

1. 去谷歌浏览器官网下载 

``` bash
$ sudo dpkg -i 下载的deb包
```

### 3. 安装node

1. 去node官网下载压缩包

``` bash
$ tar -xf 压缩包
$ sudo mv 解压的的文件 /opt/node
$ sudo vi /etc/profile 
```

末行追加环境变量

```text
export NODE_HOME=/opt/node
export PATH=$PATH:$NODE_HOME/bin
export NODE_PATH=$NODE_HOME/lib/node_mudules
```

```bash
$ sudo source /etc/profile
$
$ # 创建软连接
$ sudo ln -s /opt/node/bin/node /usr/local/bin/node
$ sudo ln -s /opt/node/bin/npm /usr/local/bin/npm
$ 
$ # 检查是否成功
$ node -v
$ npm -v
```

### 双系统时间不一致

```bash
$ timedatectl set-local-rtc 1
```

### 忽略大小写 

```bash
$ sudo vi /etc/inputrc
```

末行追加

```text
set completion-ignore-case on
```

### 查找历史命令

```bash
$ sudo vi /etc/profile
```

末行追加

```text
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'
bind '"\e[5~": history-search-backward'
bind '"\e[6~": history-search-backward'
``` 

