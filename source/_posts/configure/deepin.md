---
uuid: d305ec04-dbdc-fd95-f7ce-1dafac12d084
uuid: 
title: deepin 安装node git chrome浏览器
categories: 环境
date: 
---
deepin 安装node git 浏览器

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
$ # 最后追加以下环境变量
$ # export NODE_HOME=/opt/node
$ # export PATH=$PATH:$NODE_HOME/bin
$ # export NODE_PATH=$NODE_HOME/lib/node_mudules
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
