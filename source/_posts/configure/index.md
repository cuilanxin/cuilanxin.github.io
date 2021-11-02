---
uuid: 3a26c314-2f0d-21b2-f54c-3cf9fee39e3e
title: 配置终端翻墙
categories: configure
---
配置终端翻墙

## 终端翻墙

### 1.privoxy 安装

``` bash
$ brew install privoxy
```


### 2.privoxy 配置

打开配置文件 /usr/local/etc/privoxy/config ：
加入下面两项配置：

``` bash
$ listen-address 0.0.0.0:8118
$ forward-socks5 / localhost:1086 .
```

> - 第一行设置 privoxy 监听任意IP地址的8118端口。
> - 第二行设置本地socks5代理客户端端口。
> - 注意不要忘了最后有一个空格和点号。


### 3.启动 privoxy

``` bash
$ sudo /usr/local/sbin/privoxy /usr/local/etc/privoxy/config
```


### 4.查看是否启动成功

``` bash
$ netstat -na | grep 8118
```

### 5.privoxy 使用

在命令行终端输入如下命令，该终端即可翻墙：

``` bash
$ export http_proxy='http://localhost:8118'
$ export https_proxy='http://localhost:8118'
```

原理是将 socks5 代理转化成 http 代理给命令行终端使用。
如果不想使用了取消即可。

```bash
$ unset http_proxy
$ unset https_proxy
```

### 6.小技巧

如果关闭了终端，功能就会失效，如果需要代理一直生效，则可以把上述两行代码添加到 ~/.bash_profile 文件最后。

function proxy_off(){
    unset http_proxy
    unset https_proxy
    echo -e "已关闭代理"
}

function proxy_on() {
    export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
    export http_proxy="http://127.0.0.1:8118"
    export https_proxy=$http_proxy
    echo -e "已开启代理"
}