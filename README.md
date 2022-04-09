# angular-electron-chat

## 项目介绍

## 本地部署

### 1. 数据库部署

### 本处以Ubuntu的MySQL数据库为例

```shell
    # 安装
    sudo apt-get install mysql-server
```

### 如果是远程连接数据库，还需要开放端口

```shell
    # 打开配置文件
    sudo vim mysql.conf.d/mysqld.cnf
    # 找到 bind-address = 127.0.0.1，注释掉或把IP改成0.0.0.0
    # 重启MySQL
    sudo /etc/init.d/mysql restart
    # 确认端口状态
    netstat -an|grep 3306
    # 查看本机IP地址
    ifconfig
```

### 创建登录使用的MySQL账号，如果直接使用root账号（不推荐）登录，则可跳过此步骤

```sql
    CREATE USER 'USERNAME'@'%' IDENTIFIED BY 'PASSWORD';
    GRANT ALL ON *.* TO 'USERNAME'@'%';
    FLUSH PRIVILEGES;
```

### 导入数据库表结构

```sql
    CREATE DATABASE electron_chat;
    USE electron_chat;
    -- 注意文件路径
    SOURCE electron_chat.sql;
```

### 验证数据库连接

可以使用如 Navicat 之类的数据库连接工具进行验证，或者修改 ./server/src/dbconfig.ts 中的配置直接启动 server 程序验证
