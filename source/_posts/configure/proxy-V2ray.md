---
uuid: 4a78d99f-9c1b-f81a-998a-1cd3eb3e9ca0
title: v2ray 搭建科学上网
categories: configure
date: 2021-11-16 22:13:00
---
配置科学上网 mac 版

## 科学上网

### 1. 购买一个服务器

[racknerd 官网](https://racknerd.com/)

1. 注册账号
2. 选择适合自己的价位
3. 选择自己会用的 linux 系统(本文选用 CentOS SELinux 7 x64)

### 2. 连接服务器

``` bash
$ ssh root@服务器IP
$ # 输入密码
```

### 3. 配置ssr

在进入服务器的终端界面

### 4. 安装wget

有的不用安装

```bash
$ sudo yum -y install wget
```

### 5. 关闭防火墙

```bash
$ systemctl stop firewalld
``` 

### 6. 安装 v2ray

```bash
$ bash <(curl -s -L https://git.io/v2ray-setup.sh)
``` 


### 7. v2ray 命令

```bash
$ v2ray info # 查看 V2Ray 配置信息
$ v2ray link # 生成 V2Ray 配置文件链接
$ v2ray qr # 生成 V2Ray 配置二维码链接
$ v2ray start # 启动 V2Ray
$ v2ray stop # 停止 V2Ray
$ v2ray restart # 重启 V2Ray
$ v2ray config # 配置
```

### 8.下载 ssr 软件

按照步骤填写服务器信息，就是刚才在买的服务器中搭建的ssr的配置
[mac v2rayU](https://github.com/yanue/V2rayU/releases/tag/3.2.0)

照着配置就行了都是中文没什么好说的
