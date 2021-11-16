---
uuid: 3a26c314-2f0d-21b2-f54c-3cf9fee39e3e
title: 科学上网
categories: configure
date: 2021-11-02 22:13:00
---
配置科学上网 mac 版

## 科学上网

### 1.vultr 购买一个服务器

[vultr 官网](https://www.vultr.com/)

1. 注册账号
2. 登录激活账号
3. 账号充值
    -. 在页面 Billing 
4. 新建vps服务器
5. 尽量选择 CentOS 7 X64 因为网上教程多
6. 点击 Deploy Now
7. 部署服务器，就是看这个服务器是不是 Running 不是的话点一下
8. 记下服务器的详细信息 服务器IP、用户名和密码

### 2.连接服务器

``` bash
$ ssh root@服务器IP
$ # 输入密码
```

### 3.配置ssr

在进入服务器的终端界面

**1.安装wget**

```bash
$ yum -y install wget
```

**2.安装ssr**

```bash
$ wget https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/ssr.sh && chmod x ssr.sh && bash ssr.sh
``` 
**3.配置 ssr** 

1. 安装
2. 都是中文不多说了 不知道就默认
3. 安装好后 要记一下配置信息

```bash
$ bash ssr.sh
```

### 4.使用 Google 加速

```bash
$ yum -y install wget

$ wget –no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh

$ chmod +x bbr.sh

$ ./bbr.sh
``` 

### 5.下载 ssr 软件

按照步骤填写服务器信息，就是刚才在买的服务器中搭建的ssr的配置
[mac ssr](https://github.com/shadowsocksr-backup/ShadowsocksX-NG/releases)

